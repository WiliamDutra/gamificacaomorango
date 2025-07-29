/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * Interface defining the structure of a bonus object.
 */
export interface Bonus {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
