import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = [
    {
      "name": "string",
      "bands": [
        {
          "name": "string",
          "recordLabel": "string"
        }
      ]
    }
]
export function buildFestivalPath() {
    return path.join(process.cwd(), 'data', 'festivals.json');
}

export function extractFestivals(filePath: any) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if(req.method === 'GET') {
        const filePath = buildFestivalPath();
        const data = extractFestivals(filePath);
        res.status(200).json({ festivals: data })
    }
}

export default handler;