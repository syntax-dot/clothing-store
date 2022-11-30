import { groupBy, mapValues } from 'lodash'

const images: Record<string, { default: string }> = import.meta.glob('../../../assets/products/**/*', { eager: true })

const allImagesPaths: [string, string][] = Object.entries(images).map(
  ([path, module]) => [prepareKey(path), module.default],
)

function prepareKey(key: string): string {
  return key.split('/').slice(-2).join('/')
}

const result = groupBy(allImagesPaths, (v) => v[0].split('/').shift())

export const imagesPaths: Record<string, string[]> = mapValues(result, (v) => v.map(e => e[1]))
