import semver from 'semver';

import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8', "gh-pages", "main", "master", "example"]);
export default new DocsSource({
	id: 'main',
	name: 'Main library',
	global: 'Ige-Djs',
	repo: 'IgeCorp/ige-djs',
	defaultTag: 'stable',
	branchFilter: (branch: string) => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
	tagFilter: (tag: string) => semver.gte(tag, '9.0.0'),
});
