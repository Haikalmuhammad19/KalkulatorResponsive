import 'react-native';
import { it, describe, expect, test } from '@jest/globals';
import { kurang, tambah, kali, bagi } from '../src';

describe('Matematika fungsi', () => {
  it('Penambahan 2 bilangan', () => {
    expect(tambah(10, 5)).toBe(15);
  });

  it('Pengurangan 2 bilangan', () => {
    expect(kurang(10, 5)).toBe(5);
  });

  it('Perkalian 2 bilangan', () => {
    expect(kali(10, 5)).toBe(50);
  });

  it('Pembagian 2 bilangan', () => {
    expect(bagi(10, 5)).toBe(2);
  });

  it('Pembagian dengan angka 0', () => {
    expect(bagi(10, 0)).toBe('Tidak bisa dibagi dengan 0');
  });
});
