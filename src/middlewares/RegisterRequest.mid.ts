import { NextFunction, Request, Response } from 'express';
import TimeHelper from '../helpers/Time.helper';
import GeneratorHelper from '../helpers/CodeGenerator.helper';

const handle = (req: Request | any, res: Response, next: NextFunction) => {
  const permitted = GeneratorHelper.buildCandidates();
  req.ticket = GeneratorHelper.generate(permitted, 10);
  const { url, method, headers, body, params, query, ip } = req;
  next();
  const data = `==============================================================
    TICKET: '${req.ticket}' DATE: ${TimeHelper.format(new Date())}  
    
    URL: [${method}] -> ${url}
    BODY: ${JSON.stringify(body)}
    HEADERS: ${JSON.stringify(headers)}
    PARAMS: ${JSON.stringify(params)}
    QUERY: ${JSON.stringify(query)}
    IP: ${ip}
    ERROR: ${req.error ? JSON.stringify(req.error) : false}
    EXECUTION_TIME: ${JSON.stringify(req.time)}
    ==============================================================
    
  `;

  console.log(data);
};

export default { handle };
