import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobsterBackgroundColor'
})
export class MobsterBackgroundColorPipe implements PipeTransform {

  transform(background: string): string {

    let backgroundColor: string;

    switch (background) {
      case 'Bluish White':
        backgroundColor = 'common';
        break;
      case 'Bluish White Diamond':
        backgroundColor = 'diamond';
        break;
      case 'Caramel':
        backgroundColor = 'common';
        break;
      case 'Dark':
        backgroundColor = 'dark';
        break;
      case 'Dark Blue':
        backgroundColor = 'dark';
        break;
      case 'Dark Diamond':
        backgroundColor = 'diamond';
        break;
      case 'Dark Tiger':
        backgroundColor = 'tiger';
        break;
      case 'Electric Gold':
        backgroundColor = 'special';
        break;
      case 'Electric White':
        backgroundColor = 'special';
        break;
      case 'Gold':
        backgroundColor = 'gold';
        break;
      case 'Gold Coin Caramel':
        backgroundColor = 'gold';
        break;
      case 'Gold Coin Dark':
        backgroundColor = 'gold';
        break;
      case 'Green':
        backgroundColor = 'common';
        break;
      case 'Green Bills':
        backgroundColor = 'bills';
        break;
      case 'Green Diamond':
        backgroundColor = 'diamond';
        break;
      case 'Grey':
        backgroundColor = 'common';
        break;
      case 'Legendary Blue':
        backgroundColor = 'legendary';
        break;
      case 'Legendary Purple':
        backgroundColor = 'legendary';
        break;
      case 'Legendary Red':
        backgroundColor = 'legendary';
        break;
      case 'Legendary Red & White':
        backgroundColor = 'legendary';
        break;
      case 'Mafia Blue':
        backgroundColor = 'mafia mafia-blue';
        break;
      case 'Mafia Purple':
        backgroundColor = 'mafia mafia-purple';
        break;
      case 'Mafia Red':
        backgroundColor = 'mafia mafia-red';
        break;
      case 'Mafia Red & White':
        backgroundColor = 'mafia mafia-red-white';
        break;
      case 'Orange':
        backgroundColor = 'common';
        break;
      case 'Purple Tiger':
        backgroundColor = 'tiger';
        break;
      case 'Red':
        backgroundColor = 'common';
        break;
      case 'Red Tiger':
        backgroundColor = 'tiger';
        break;
      case 'Tiger':
        backgroundColor = 'tiger';
        break;
      case 'Smoke Dark':
        backgroundColor = 'special';
        break;
      case 'Smoke White':
        backgroundColor = 'special';
        break;
      case 'White':
        backgroundColor = 'common';
        break;
      case 'White Diamond':
        backgroundColor = 'diamond';
        break;
      case 'White Gold Coins':
        backgroundColor = 'gold';
        break;
      case 'White Tiger':
        backgroundColor = 'tiger';
        break;
      default:
            return backgroundColor = '';
    }
    return backgroundColor;
  }

}
