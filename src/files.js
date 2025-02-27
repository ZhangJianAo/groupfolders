/*
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

__webpack_nonce__ = btoa(OC.requestToken);
__webpack_public_path__ = OC.linkTo('groupfolders', 'build/');

(function(OC, OCA) {
	OC.Plugins.register('OCA.Files.App', {
		attach: () => {
			if (OCA.Theming) {
				OC.MimeType._mimeTypeIcons['dir-group'] = OC.generateUrl('/apps/theming/img/groupfolders/folder-group.svg?v=' + OCA.Theming.cacheBuster);
			} else {
				OC.MimeType._mimeTypeIcons['dir-group'] = OC.imagePath('groupfolders', 'folder-group');
			}
		}
	});
})(OC, OCA);

window.addEventListener('DOMContentLoaded', () => {
	import(/*c webpackChunkName: "sharing" */'./SharingSidebarApp').then((Module) => {
		OCA.Sharing.ShareTabSections.registerSection((el, fileInfo) => {
			if (fileInfo.mountType !== 'group') {
				return
			}
			return Module.default
		})
	})
})
