import City from '../../../domain/city.domain.'
import Job from '../../../domain/job.domain'
import JobAppModelPort from './job-app-model.port'
import { CityRepositoryJsonAdapterPort } from '../../../repository/adapter/json/city/city-repository-json-adapter.dependency'
import { JobRepositoryJsonAdapterPort } from '../../../repository/adapter/json/job/job-repository-json-adapter.dependency'

import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.join(__dirname, '../../../../config/.env.development')
})
const LIMIT: number = (process.env.LIMIT != null) ? +process.env.LIMIT : 1

export { CityRepositoryJsonAdapterPort, JobRepositoryJsonAdapterPort, JobAppModelPort, City, Job, LIMIT }
