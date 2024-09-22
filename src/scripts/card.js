import { currentDate } from './utils/time.js'
import { iconMapper } from './utils/iconMapper.js'

function renderCard( targetContainer, capital, temperature, weatherDescription) {
  const capitalCityNameShortener =
    capital.length >= 10 ? `${capital.slice(0, 9)}...` : capital

  const listItemElement = document.createElement('li')
  listItemElement.classList.add('list__item')

  const backgroundPath = `./src/assets/images/${capital}.webp`

  listItemElement.style = `
    background-image: url('${backgroundPath}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  `

  const weatherIconElement = document.createElement('img')
  weatherIconElement.classList.add('item__icon')
  weatherIconElement.src    = iconMapper(weatherDescription)
  weatherIconElement.alt    = weatherDescription
  weatherIconElement.title  = weatherDescription

  const temperatureElement = document.createElement('p')
  temperatureElement.classList.add('bottom__temperature')
  temperatureElement.title        = 'Temperature'
  temperatureElement.textContent  = temperature

  const temperatureUnitElement = document.createElement('sup')
  temperatureUnitElement.classList.add('temperature__celsius')
  temperatureUnitElement.textContent = '°C'

  const capitalElement = document.createElement('p')
  capitalElement.classList.add('bottom__state')
  capitalElement.title        = capital
  capitalElement.textContent  = capitalCityNameShortener

  const bottomSpanElement = document.createElement('span')
  bottomSpanElement.classList.add('item__bottom')

  temperatureElement.appendChild(temperatureUnitElement)

  bottomSpanElement.appendChild(temperatureElement)
  bottomSpanElement.appendChild(capitalElement)

  listItemElement.appendChild(weatherIconElement)
  listItemElement.appendChild(bottomSpanElement)

  targetContainer.appendChild(listItemElement)
}

function renderDateCard(targetContainer) {
  const listItemElement = document.createElement('li')
  listItemElement.classList.add('list__item')
  listItemElement.setAttribute('id', 'list__item--date')

  const textElement = document.createElement('time')
  textElement.classList.add('item__text')
  textElement.textContent = 'Today'
  textElement.title       = currentDate().commonFormat
  textElement.dateTime    = currentDate().isoFormat

  listItemElement.appendChild(textElement)

  targetContainer.appendChild(listItemElement)
}

export { renderCard, renderDateCard }
