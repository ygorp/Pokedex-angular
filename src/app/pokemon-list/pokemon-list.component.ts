import { PokemonService } from './../../_services/pokemon.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {

  constructor(
    public PokemonService: PokemonService,
  ){

  }

}

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export function getPokemonImage(pokemon: Pokemon): string {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon}.png`;
}

export enum Type {
  Grass = 'Grass',
  Poison = 'Poison',
  Fire = 'Fire',
  Flying = 'Flying'
}
