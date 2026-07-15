const common = {
    import: ['src/**/*.ts'],
    paths: ['src/features/**/*.feature'],
    format: [
        'progress-bar',
        'html:cucumber-report.html',
        'json:cucumber-report.json'
    ],
    formatOptions: {
        snippetInterface: 'async-await',
    },
    publishQuiet: true,
    timeout: 60 * 1000
};

const ci = {
    ...common,
    format: [
        ...common.format,
        'json:./reports/cucumber.json',
        'html:./reports/cucumber-embedded.html',
    ],
    retry: 2,
    timeout: 60 * 1000
};

const local = {
    ...ci,
    retry: 0,
    timeout: 60 * 1000
};

module.exports = {
    default: local,
    ci: ci,
    local: local
};
