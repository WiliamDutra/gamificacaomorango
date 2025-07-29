/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Bonus } from './types';
import { PriceTagIcon, PackageIcon, ChecklistIcon, BookIcon, CameraIcon, UsersIcon } from './components/icons';

export const ORIGINAL_PRICE = 49.90;
export const BASE_PRICE = 19.97;
export const BONUS_PRICE = 4.90;
export const MAX_FREE_BONUSES = 2;

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: 'Guia de Embalagens Criativas',
    description: 'PDF com ideias incríveis para apresentar seus doces e encantar.',
    icon: PackageIcon,
  },
  {
    id: 2,
    title: 'Planilha de Precificação Automática',
    description: 'Calcule seus custos e lucros de forma fácil e sem erros.',
    icon: PriceTagIcon,
  },
  {
    id: 3,
    title: 'Receita Secreta do Brigadeiro Perfeito',
    description: 'Aula bônus ensinando o ponto ideal do brigadeiro para rechear.',
    icon: BookIcon,
  },
  {
    id: 4,
    title: 'Acesso ao Grupo VIP de Alunas',
    description: 'Troque experiências e tire dúvidas em nosso grupo fechado.',
    icon: UsersIcon,
  },
  {
    id: 5,
    title: 'Guia de Fotografia com Celular',
    description: 'E-book com dicas para tirar fotos incríveis dos seus doces.',
    icon: CameraIcon,
  },
  {
    id: 6,
    title: 'Lista de Fornecedores de Sucesso',
    description: 'Contatos dos melhores fornecedores para economizar.',
    icon: ChecklistIcon,
  }
];
