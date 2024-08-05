describe('Open Application',() => {
    it('should open apps', async() => {
        await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]').click();
    })
})
describe('Diet Meal App - Input Form', () => {
    it('should complete the input form and check the result', async () => {
        // Given Diet Meal App Homepage
        // Assuming the app is already open in the test setup
        
        // When User Input Form
        const nameInput = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]');
        await nameInput.click();
        await nameInput.setValue('Jelita Siahaan');
        
        const weightInput = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]');
        await weightInput.click();
        await weightInput.setValue('62');
        
        const heightInput = await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]');
        await heightInput.click();
        await heightInput.setValue('155');
        
        const genderRadio = await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]');
        await genderRadio.click();

        await browser.hideKeyboard();
        
        // And Click “Next”
        const nextButton = await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]');
        await nextButton.click();
        
        // And Choose “Aktivitas Sehari-hari”
        const activityRadio = await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_low_to_medium"]');
        await activityRadio.click();
        
        // And Click “Selesai”
        const finishButton = await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]');
        await finishButton.click();
        
        // Then user gets “Ready to some calories today?”
        const resultText = await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_desc"]');
        const text = await resultText.getText();
        expect(text).toBe('Ready to some calories today?');
    });
});
