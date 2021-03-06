import dynamic from 'next/dynamic'
// handle issue: https://github.com/JedWatson/react-select/issues/3590
const Select = dynamic(() => import("react-select"), { ssr: false });
import 'twin.macro'

import { TCountryCode } from '../utils/language'

interface IOptionProps {
  countryCode: TCountryCode
  label: string
}

function LocaleOption(props: IOptionProps) {
  const { countryCode, label } = props;

  return (
    <div tw="flex items-center">
      <img src={`/flag-${countryCode}.svg`} width="20" height="20" alt="" />
      <span tw="ml-3">{ label }</span>
    </div>
  )
}

interface IOption {
  value: TCountryCode
  label: React.ReactElement
}

const options: IOption[] = [
  { value: 'us', label: <LocaleOption label="English" countryCode="us" />  },
  { value: 'id', label: <LocaleOption label="Indonesia" countryCode="id" /> },
]

interface ISelectProps {
  language: TCountryCode
  setLanguage: (language: TCountryCode) => void
}

function SelectLanguage(props: ISelectProps) {
  const { language, setLanguage } = props;

  return (
    <Select
      options={options}
      value={options.find(option => option.value === language)}
      onChange={(item: IOption) => setLanguage(item.value)}
      isSearchable={false}
      aria-label="Select Language"
    />
  )
}

export default SelectLanguage
