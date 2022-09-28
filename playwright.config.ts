import { PlaywrightTestConfig,devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
    use:{
        headless: false,
    },
    projects: [
        {
            name:'chromium',
            use: {...devices['Desktop Chrome']}    
        },
        {
            name:'firefox',
            use: {...devices['Desktop Firefox']}    
        },
        {
            name:'webKit',
            use: {...devices['Desktop Safari']}    
        },
        
    ]
        
};
export default config;