"use strict";


// Scrapy settings for tutorial project
//
// For simplicity, this file contains only settings considered important or
// commonly used. You can find more settings consulting the documentation:
//
//    http://doc.scrapy.org/en/latest/topics/settings.html
    //     http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
    //     http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html

module.exports = {
    "botName" : "$PROJECTNAME$",
    "spiderModules": ["tutorial.spiders"],
    "newSpiderModule": "tutorial.spiders",
    "userAgent": "$PROJECTNAME$ (+http://www.yourdomain.com)",
    "robotsTxtObey": true,
    "concurrentRequests": 32,
    "downloadDelay": 3,
    "concurrentRequestsPerDomain": 16,
    "concurrentRequestsPerIp": 16,
    "cookiesEnabled": true,
    "telnetConsoleEnabled": true,
    "defaultRequestHeaders": {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en",
    }
}


