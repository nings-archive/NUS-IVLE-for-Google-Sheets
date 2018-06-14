/**
 * Fetches the course name of a given module code using IVLE's api
 *
 * @param {string} An API key for IVLE
 * @param {string} The module code to look up
 * @return {string} The corresponding course name of the module code
 * @customfunction
 */
function GET_COURSE_NAME(moduleCode) { return getCourseName(moduleCode); }

function getCourseName(moduleCode) {
    response = UrlFetchApp.fetch(ivleUrl(moduleCode));
    body = response.getContentText();
    body = JSON.parse(body);
    mostRecent = body.Results[body.Results.length - 1]
    return mostRecent.CourseName
}

function ivleUrl(moduleCode) {
    return 'https://ivle.nus.edu.sg/api/Lapi.svc/Modules_Search?APIKey=' +
        apiKey() + '&ModuleCode=' + moduleCode;
}

function apiKey() {
    return process.env.IVLE_KEY
}
