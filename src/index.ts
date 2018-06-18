/**
 * Fetches the course name of a given module code using IVLE's api
 *
 * @param {string} An API key for IVLE
 * @param {string} The module code to look up
 * @return {string} The corresponding course name of the module code
 * @customfunction
 */
function GET_COURSE_NAME(moduleCode) { return getCourseName(moduleCode); }

const getCourseName = moduleCode => {
    response = UrlFetchApp.fetch(ivleUrl(moduleCode));
    body = response.getContentText();
    body = JSON.parse(body);
    mostRecent = body.Results[body.Results.length - 1];
    return mostRecent.CourseName;
};

const ivleUrl = moduleCode => (
    'https://ivle.nus.edu.sg/api/Lapi.svc/Modules_Search?APIKey=' +
    API_KEY + '&ModuleCode=' + moduleCode
);

const API_KEY = process.env.IVLE_KEY;
