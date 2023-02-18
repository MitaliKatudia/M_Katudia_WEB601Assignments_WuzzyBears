import { Content } from "./content-interface";

export class ContentList {
  private _items: Content[];

  constructor() {
    this._items = [];
  }

  get contentsList() {
    return this._items;
  }

  add(content: Content) {
    return this._items.push(content);
  }

  count() {
    return this._items.length;
  }

  getContentDetails(index: number) {
    let content = this._items[index];
    return `
        <div>
        <h1>Title: ${content.title}</h1>
        <p>description: ${content.description}</p>
        <img src="${content.imgURL}">
        <p>creator: ${content.creator}</p>
        <p>Type: ${content.type}</p>
        <p>Tags: ${content.tags}</p>
        </div><br>`;
  }
}
