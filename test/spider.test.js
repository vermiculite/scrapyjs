"use strict";

let Spider = require('../lib/spider');


describe('spider', function() {

    it('should have a name', function() {
        let name = 'Bob';
        let spider = new Spider({name});
        spider.name.should.equal(name);
    });

    it('should set allowedDomains as an array of strings', function() {
        let allowedDomains = ['one', 'two', 'three'];
        let spider = new Spider({allowedDomains});
        spider.allowedDomains.should.be.an('array').with.length(3);
    });

    it('should set startUrls', function() {
        let startUrls = ['http://abc.com'];
        let spider = new Spider({startUrls});
        spider.startUrls.should.be.an('array').with.length(1);
    });
});