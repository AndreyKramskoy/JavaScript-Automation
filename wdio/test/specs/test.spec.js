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
    
            const mobileError = await $("label#undefined-info");
            expect(await mobileError.getText()).toEqual("Enter valid mobile number");
        });

        it("Fourth test", async() => {
            await $("//button[text()='Cancel']").click();
            await $("div.doctors").click();
            await $("//button[text()='Add New Doctor']").click();
            await $("input[name='Name']").setValue("Andrey");
            await $("input[name=Email]").setValue("Andrey@gmail.com");
            await $("#DoctorMobile").setValue("9999999999");
            await $("//button[text()='Save']").click();
    
            const EducationError = await $("label#Education-info");
            expect(await EducationError.getText()).toEqual("Enter valid education");
            });

            it("Fifth test", async() => {
                await $("//button[text()='Cancel']").click();
                await $("div.doctors").click();
                await $("//button[text()='Add New Doctor']").click();
                await $("input[name=Education]").setValue("Univesity");
                await $("input[name=Email]").setValue("Andrey@gmail.com");
                await $("#DoctorMobile").setValue("9999999999");
                await $("//button[text()='Save']").click();
                    
                    const NameError = await $("label#Name-info");
                 expect(await NameError.getText()).toEqual("Enter valid name");

                    await $("/html/body/div[2]/ejs-dialog/div[1]/button").click();
                });
                
                                   
                it("WebDriverIO 1", async() => {                                                            
                     const DashboardBut = await $("div.dashboard"); 
                     await DashboardBut.waitForExist();
                     await DashboardBut.waitForExist({
                        timeout: 1000,
                        reverse: false,
                        timeoutMsg: "There is no DashboardBut element",
                        interval:50,
                     });
                     
               });              
                  
                 it("WebDriverIO 2", async() => {                                           
                     const emailError = await $("label#Name-info");
                     console.log(await emailError.isDisplayed());
                     console.log(await emailError.isExisting());
                     });

                it("WebDriverIO 3", async() => {                     
                     await $("//button[text()='Add New Doctor']").click({
                        button:0
                     });
                     const DialogWindow = await $("div.e-dlg-content"); 
                     await DialogWindow.waitForDisplayed();
                     await DialogWindow.waitForDisplayed({
                        timeout: 10000,
                        reverse: false,
                        timeoutMsg: "There is no DialogWindow element",
                        interval:100,
                     });
                     await $("/html/body/div[2]/ejs-dialog/div[1]/button").click();
                         });

                 it("WebDriverIO 4", async() => {                                           
                            await browser.pause(3000);
                            await browser.setCookies([
                                {
                                    name:"MyCookie",
                                    value: "ILoveJavaScript",
                                },                                
                            ]);
                            await browser.pause(50000);
                            });

                            it("WebDriverIO 5", async() => {                     
                                await $("//button[text()='Add New Doctor']").click();
                                const ButtonCansel = await $("div.button-container"); 
                                await ButtonCansel.click({
                                   button:0,
                                   x:43,
                                   Y:32,     

                                });                                
                                    });


})