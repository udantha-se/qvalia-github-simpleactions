import * as os from 'os';

try {
  const val = process.env[`INPUT_ACTION`] || '';
  console.log('event ran')
} catch (error) {
  process.exitCode = 1;
  process.stdout.write(error.getMessage() + os.EOL);
}