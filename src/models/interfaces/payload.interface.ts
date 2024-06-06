import { Model } from '../enums/model.enum';

/**
 * Payload
 */
export interface Payload {
  /** model */
  model: Model;

  /** latitude */
  latitude: number;

  /** longitude */
  longitude: number;

  /** more query params */
  params?: string;
}
