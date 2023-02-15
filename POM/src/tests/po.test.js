const { page } = require('../po');

describe('Doctors Page Test Suite', () => {
  beforeEach(async () => {
    await page('dashboard').open(); // -> User opens the "Dashboard" page.
  });

  it('user opens page', async () => {
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('user opens modal', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await expect(page('doctors').addDoctorModal.rootEl).toBeDisplayed();
  });

  it('add doctor', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await expect(page('doctors').addDoctorModal.rootEl).toBeDisplayed();

    await page('doctors').addDoctorModal.input('name').setValue('Andrey Kramskoy');
    await page('doctors').addDoctorModal.input('phone').setValue("4474505051");
    await page('doctors').addDoctorModal.input('email').setValue('Kramskoy@test.com');
    await page('doctors').addDoctorModal.input('education').setValue('Basic');
    await page('doctors').addDoctorModal.input('designation').setValue('Test');

    await page('doctors').addDoctorModal.saveBtn.click();

    await expect(page('doctors').addDoctorModal.rootEl).not.toBeDisplayed();

    await expect(page('doctors').specialistCard(8).name).toHaveTextContaining('Andrey Kramskoy');
    await expect(page('doctors').specialistCard(8).education).toHaveTextContaining('Basic', {
      ignoreCase: true,
    });
  });

  it('close modal', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await page('doctors').addDoctorModal.closeBtn.click();
    await expect(page('doctors').addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
