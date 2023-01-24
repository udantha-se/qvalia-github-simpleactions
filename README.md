# Qvalia Github Simple Actions

This action repo holds multiple simple actions. Each of the actions here should be javascript and shouldn't need third party node modules to run.

## Inputs

### `action`

**Required** Action name to run.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@v1.1
with:
  action: 'github-pr-title-need-jira'
```