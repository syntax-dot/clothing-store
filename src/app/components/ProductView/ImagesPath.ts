import { groupBy, mapValues } from 'lodash'
const images = import.meta.glob('../../../assets/products/**/*', { eager: true })

const allImagesPaths: [string, string][] = Object.entries(images).map(v => [prepareKey(v[0]), v[1]?.default])

function prepareKey(key: string): string {
  return key.split('/').slice(-2).join('/')
}

const result = groupBy(allImagesPaths, (v) => v[0].split('/').shift())

export const imagesPaths: Record<string, string[]> = mapValues(result, (v) => v.map(e => e[1]))
