import { ivleUrl } from './commons'

/**
 * Fetches the course name of a given module code using IVLE's api
 *
 * @param {string} An API key for IVLE
 * @param {string} The module code to look up
 * @return {string} The corresponding course name of the module code
 * @customfunction
 */
function GET_COURSE_NAME(moduleCode: string) { return getCourseName(moduleCode) }

const getCourseName = (moduleCode: string) => {
    const response = UrlFetchApp.fetch(ivleUrl(moduleCode))
    const body = JSON.parse(response.getContentText())
    const mostRecent = body.Results[body.Results.length - 1]
    return mostRecent.CourseName
}
