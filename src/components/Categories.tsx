/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Categories({ selectedCategory, onSelectCategory }: CategoriesProps) {
  return null;
}