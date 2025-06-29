/**
 * Metadata class for representing metadata of a content object.
 *
 * @category Content
 * @group Metadata Class
 */
export class Metadata {
  id: string;

  constructor(v: Metadata) {
    this.id = v.id;
  }
}
