import * as os from 'os';

try {
  const val = process.env[`INPUT_ACTION`] || '';
  switch (val) {
    case 'value':
      require(val).run();
      break;
  
    default:
      console.log('Skipped because no action')
      break;
  }
  console.log('event ran')
} catch (error) {
  process.exitCode = 1;
  process.stdout.write(error.getMessage() + os.EOL);
}