import { PlaywrightTestConfig,devices } from "@playwright/test";

const config: PlaywrightTestConfig = {

    projects: [
        {
            name:'firefox',
            use: {...devices['Desktop Firefox']}    
        },
        {   name:'chrome',
            use: {...devices['Desktop Chrome']}    
        },
    ]

    
        
};