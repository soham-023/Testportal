document.addEventListener('DOMContentLoaded', () => {
    const ACTIVATION_KEYS = ['Enter', ' '];

    /**
     * Wire up a dropdown-style control so it works with both mouse and
     * keyboard (Enter / Space) and keeps aria-expanded in sync.
     * Missing elements are skipped so the script never throws.
     */
    const setupToggle = (selector, label) => {
        const element = document.querySelector(selector);
        if (!element) {
            return;
        }

        const toggle = () => {
            const expanded = element.getAttribute('aria-expanded') === 'true';
            element.setAttribute('aria-expanded', String(!expanded));
            console.log(`${label} ${expanded ? 'closed' : 'opened'}`);
        };

        element.addEventListener('click', toggle);
        element.addEventListener('keydown', (event) => {
            if (ACTIVATION_KEYS.includes(event.key)) {
                event.preventDefault();
                toggle();
            }
        });
    };

    setupToggle('.lang-selector', 'Language selector');
    setupToggle('.respondent-info', 'Respondent dropdown');
    setupToggle('.test-config-dropdown', 'Test configuration dropdown');
});
