import Job from '../../../domain/job.domain'
import JobAppControllerPort from './job-app-controller.port'
import JobAppModelPort from '../../model/job/job-app-model.port'
import { dotenv, path } from '../../../web-app/web-app.dependency'

dotenv.config({
    path: path.join(__dirname, '../../../../config/.env.development')
})
const LIMIT: number = (process.env.LIMIT != null) ? +process.env.LIMIT : 1
export { Job, JobAppControllerPort, JobAppModelPort, LIMIT }
