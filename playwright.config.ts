import { PlaywrightTestConfig,devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use:{
        headless: false,
    },
    projects: [
        {
            name:'firefox',
            use: {...devices['Desktop Firefox']},    
        },
        {
            name:'chromium',
            use: {...devices['Desktop Chrome']},    
        },
        
     ]
        };
export default config;