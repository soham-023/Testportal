

document.addEventListener('DOMContentLoaded', () => {
    
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
        langSelector.addEventListener('click', () => {
            console.log('Language selector clicked!');
            
        });
    }

    const respondentInfo = document.querySelector('.respondent-info');
    if (respondentInfo) {
        respondentInfo.addEventListener('click', () => {
            console.log('Respondent info dropdown clicked!');
        });
    }

   
    const testConfigDropdown = document.querySelector('.test-config-dropdown');
    if (testConfigDropdown) {
        testConfigDropdown.addEventListener('click', () => {
            console.log('Test configuration dropdown clicked!');
           
        });
    }

});