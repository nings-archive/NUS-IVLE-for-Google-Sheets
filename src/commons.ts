export const ivleUrl = (moduleCode: string) => (
    'https://ivle.nus.edu.sg/api/Lapi.svc/Modules_Search?APIKey=' +
    API_KEY + '&ModuleCode=' + moduleCode
)

const API_KEY = process.env.IVLE_KEY

