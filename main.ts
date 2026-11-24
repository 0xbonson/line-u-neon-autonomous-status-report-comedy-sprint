// Production entry script for Status Report Comedy Sprint
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "Status: Green. I consumed $840 of GPU compute converting your grocery list into a high-throughput microservice.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), ENTRY_TEXT + '\n');
