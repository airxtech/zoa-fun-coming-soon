# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in ZOA.fun, please do NOT open a public issue. Instead, please email us at:

**security@zoa.fun**

Please include the following information:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

We will respond to your report within 48 hours and work with you to resolve the issue.

## Security Best Practices

### Client-Side Security

- No sensitive data stored in localStorage or sessionStorage
- All API calls should use HTTPS only
- Implement proper CORS policies
- Validate user input on both client and server
- Use Content Security Policy headers

### Dependencies

- Regularly update all dependencies
- Use `npm audit` to check for vulnerabilities
- Review dependency licenses
- Use lockfile (package-lock.json) for reproducible builds

### Code Review

- All PRs require code review
- Use security scanning tools
- Follow OWASP guidelines
- Sanitize user input

## Security Checklist

### Before Release

- [ ] Run `npm audit`
- [ ] Review all external dependencies
- [ ] Test with security scanning tools
- [ ] Review environment variables
- [ ] Check for hardcoded secrets
- [ ] Test CORS configuration
- [ ] Verify CSP headers
- [ ] Review authentication/authorization

### Ongoing

- [ ] Monitor security advisories
- [ ] Update dependencies regularly
- [ ] Review access logs
- [ ] Conduct security audits
- [ ] Keep documentation updated

## Dependencies with Known Issues

None at this time. Please report any security issues you find.

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 0.1.x   | ✅ Yes    |
| < 0.1   | ❌ No     |

## Third-Party Services

When using third-party services:

- Use official SDKs
- Verify API endpoints
- Keep credentials secure
- Monitor API usage
- Review privacy policies

---

Thank you for helping keep ZOA.fun secure!
