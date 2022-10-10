/**
 * Takes in an address string and returns an object with state abbreviation and zip values parsed from the string
 * Example return: { state: AL, zip: 12345 }
 *
 * @param addressString
 * @return { state, zip }
 */

export function matchStateAndZip(addressString: string): { state: string | null; zip: string | null } | null {
  let abbreviationsRegex = /\W(AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|PR|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)\W/

  let state = addressString.match(abbreviationsRegex)?.[0] ?? null
  state = state?.replace(/(,|;)/, '').trim() ?? null
  let zipRaw = addressString.match(/\W+\d{5}(\d{4}|\W+|\n+|\r+|$)/)?.[0] ?? null
  let zip = zipRaw?.replace(/\D/, '')?.trim()?.slice(0, 5) ?? null

  return (
    {
      state,
      zip,
    } ?? null
  )
}
