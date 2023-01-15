//button[text()='Cancel']
describe("Test suite", () => {
    
    it("First test", async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
        const pageTitle = await browser.getTitle();

        console.log(pageTitle);
    });

    it("Second test", async() => {
    await $("div.doctors").click();
    await $("//button[text()='Add New Doctor']").click();
    await $("input[name='Name']").setValue("Andrey");
    await $("//button[text()='Save']").click();

        const emailError = await $("label#Email-info");
        expect(await emailError.getText()).toEqual("Enter valid email");
    });

    it("Third test", async() => {
        await $("//button[text()='Cancel']").click();
        await $("div.doctors").click();
        await $("//button[text()='Add New Doctor']").click();
        await $("input[name='Name']").setValue("Andrey");
        await $("input[name=Email]").setValue("Andrey@gmail.com");
        await $("input[name=Education]").setValue("Univesity");
        await $("//button[text()='Save']").click();
    
            const emailError = await $("label#undefined-info");
            expect(await emailError.getText()).toEqual("Enter valid mobile number");
        });

        it("Fourth test", async() => {
            await $("//button[text()='Cancel']").click();
            await $("div.doctors").click();
            await $("//button[text()='Add New Doctor']").click();
            await $("input[name='Name']").setValue("Andrey");
            await $("input[name=Email]").setValue("Andrey@gmail.com");
            await $("#DoctorMobile").setValue("9999999999");
            await $("//button[text()='Save']").click();
    
            const emailError = await $("label#Education-info");
            expect(await emailError.getText()).toEqual("Enter valid education");
            });

            it("Fifth test", async() => {
                await $("//button[text()='Cancel']").click();
                await $("div.doctors").click();
                await $("//button[text()='Add New Doctor']").click();
                await $("input[name=Education]").setValue("Univesity");
                await $("input[name=Email]").setValue("Andrey@gmail.com");
                await $("#DoctorMobile").setValue("9999999999");
                await $("//button[text()='Save']").click();
                    
                    const emailError = await $("label#Name-info");
                 expect(await emailError.getText()).toEqual("Enter valid name");

                    await $("/html/body/div[2]/ejs-dialog/div[1]/button").click();
                });                
})