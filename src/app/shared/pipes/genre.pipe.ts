import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Adventure' : return 'cyclone';
      case 'Comedy' : return 'smile';
      case 'Drama' : return 'theater_comedy';
      case 'Fantasy' : return 'stars';
      case 'Horror' : return 'forest';
      case 'Romance' : return 'favorite';
      case 'Thriller' : return 'dangerous';
      case 'Sci-Fi' : return 'rocket_launch';
    }
    return 'help';
  }

}
