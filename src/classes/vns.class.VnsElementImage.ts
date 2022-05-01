/**
 * Describes an image moment element.
 */
class VnsElementImage extends VnsElement {
	Src: string;


	constructor() {
		super();
		this.ContentCulture = VnsCulture.None;
	}


	static Parse(element: HTMLElement) {
		const result = new VnsElementImage();
		result.Src = element.textContent;

		if (element.hasAttribute('lang')) {
			const lang = element.attributes['lang'].textContent;
			result.ContentCulture = VnsTools.ParseCulture(lang);
		}

		return result;
	}
}