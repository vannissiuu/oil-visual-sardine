#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const required = [
  'SKILL.md',
  'VERSION',
  'agents/openai.yaml',
  'references/character-lock.md',
  'references/color-lock.md',
  'references/direction-lock.md',
  'scripts/cutout.py',
];

const missing = required.filter((relativePath) => !existsSync(resolve(root, relativePath)));
if (missing.length > 0) {
  console.error('Missing required package files:\\n- ' + missing.join('\\n- '));
  process.exit(1);
}

const version = readFileSync(resolve(root, 'VERSION'), 'utf8').trim();
if (!/^[0-9]+\.[0-9]+\.[0-9]+$/.test(version)) {
  console.error('VERSION is not semantic versioning: ' + version);
  process.exit(1);
}

const skill = readFileSync(resolve(root, 'SKILL.md'), 'utf8');
const forbiddenAbsolutePath = /(?:^|[\s`])\/(?:Users|home|private|tmp)\//m;
if (forbiddenAbsolutePath.test(skill)) {
  console.error('SKILL.md contains a machine-specific absolute path');
  process.exit(1);
}

console.log('oil-visual-sardine ' + version + ': install verification passed (' + required.length + ' required files)');
