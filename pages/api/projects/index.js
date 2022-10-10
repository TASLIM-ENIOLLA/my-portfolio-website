import {ProjectsData} from '/data/Projects'

export default function handler(_, res){
    res.status(200).json({type: 'success', data: ProjectsData})
}
