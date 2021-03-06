import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Box, boxPropTypes } from '@/ui/Box';
import { Button, ButtonSizes, ButtonVariants } from '@/ui/Button';
import { Image } from '@/ui/Image';
import { useCookiesWithOptions } from '@/hooks/useCookiesWithOptions';

import PropTypes from 'prop-types';
import { Inline } from '@/ui/Inline';
import { Link } from '@/ui/Link';
import { Stack } from '@/ui/Stack';
import { List } from '@/ui/List';
import { Breakpoints, getValueFromTheme } from '@/ui/theme';
import { css, keyframes } from 'styled-components';

const getValueForPage = getValueFromTheme('loginPage');
const getValueForLogo = getValueFromTheme('loginLogo');

const Svg = (props) => (
  <Box
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 250"
    {...props}
  />
);

const Group = (props) => <Box as="g" fill="white" {...props} />;
Group.propTypes = {
  ...boxPropTypes,
};
const Path = (props) => <Box as="path" {...props} />;
Path.propTypes = {
  ...boxPropTypes,
};

const Animation = (props) => {
  const draw = keyframes`
    to {
      stroke-dashoffset: 0;
    }
  `;

  const drawAnimationLineLeft = css`
    ${draw} 2s 0.2s forwards linear;
  `;

  const drawAnimationLineRight = css`
    ${draw} 2s 2.6s forwards linear;
  `;

  const logoAnimate = keyframes`
    0% {
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.3, 0.1, 0.9, 0.5);
    }
    10% {
      transform: scale(0.8);
      animation-timing-function: cubic-bezier(0.1, 0.4, 0.2, 1);
    }
    100% {
      transform: scale(1);
    }
  `;

  const publicAnimate = keyframes`
    0% {
      transform: scale(1);
      animation-timing-function: cubic-bezier(0.3, 0.1, 0.9, 0.5);
    }
    10% {
      transform: scale(0.8);
      animation-timing-function: cubic-bezier(0.1, 0.4, 0.2, 1);
    }
    100% {
      transform: scale(1);
    }
  `;

  return (
    <Svg {...props} width="100%">
      <Group
        css={`
          fill: ${getValueForLogo('colorHard')};
        `}
      >
        <Path d="M222.827 65.38c-.387 1.497-1.914 2.397-3.41 2.01-1.499-.386-2.4-1.913-2.013-3.411.387-1.496 1.916-2.396 3.413-2.01 1.496.387 2.396 1.914 2.01 3.411M231.609 67.649c-.387 1.497-1.915 2.398-3.411 2.011-1.497-.386-2.397-1.913-2.011-3.412.387-1.497 1.914-2.396 3.412-2.01 1.496.386 2.397 1.914 2.01 3.411M195.024 44.439c.386 1.498-.514 3.025-2.009 3.412-1.499.388-3.026-.514-3.413-2.011-.386-1.497.514-3.024 2.011-3.411s3.024.513 3.411 2.01M203.807 42.17c.386 1.498-.514 3.024-2.01 3.412-1.499.387-3.025-.514-3.413-2.012-.386-1.496.515-3.024 2.011-3.411 1.497-.386 3.025.514 3.412 2.011" />
        <Path d="M198.324 71.398h-.002c-9.818 0-18.392-6.647-20.851-16.164l-4.512-17.463c-.118-.456-.214-.913-.302-1.371l-.301-1.571 1.587-.2c6.328-.796 12.884-2.064 19.487-3.769 6.601-1.707 12.952-3.772 18.876-6.141l1.484-.593.498 1.519c.146.444.283.892.4 1.349l4.511 17.461c2.973 11.503-3.969 23.28-15.474 26.254-1.771.458-3.589.689-5.401.689zm-22.365-34.008l4.417 17.094c2.117 8.192 9.496 13.914 17.946 13.915h.002c1.56 0 3.124-.2 4.65-.594 9.903-2.56 15.879-12.698 13.32-22.599l-4.417-17.095c-5.597 2.163-11.542 4.062-17.698 5.654-6.156 1.59-12.277 2.807-18.22 3.625zM223.199 93.289c-1.78 0-3.585-.222-5.386-.688-8.403-2.17-14.657-9.121-15.932-17.707l2.968-.44c1.098 7.391 6.481 13.375 13.714 15.243 9.903 2.557 20.042-3.417 22.6-13.319l4.416-17.095c-5.953-.82-12.074-2.037-18.223-3.625-1.293-.335-2.571-.68-3.833-1.039l.819-2.886c1.241.352 2.496.691 3.766 1.021 6.591 1.702 13.148 2.97 19.487 3.77l1.585.2-.299 1.569c-.087.457-.184.916-.303 1.374l-4.511 17.463c-2.507 9.702-11.281 16.159-20.868 16.159zM228.888 84.451c-.707-3.188-3.106-5.674-6.263-6.488-2.98-.771-6.172.119-8.329 2.323l-2.144-2.099c2.905-2.968 7.207-4.167 11.222-3.129 4.255 1.098 7.49 4.449 8.442 8.744l-2.928.649zM198.328 61.055c-3.281 0-6.443-1.393-8.689-3.933l2.248-1.987c2.161 2.445 5.466 3.457 8.622 2.642 2.982-.77 5.342-3.094 6.161-6.065l2.893.797c-1.104 4.004-4.285 7.136-8.303 8.173-.974.25-1.958.373-2.932.373z" />
      </Group>

      <Group
        css={`
          fill: ${getValueForLogo('colorMedium')};
        `}
      >
        <Path d="M158.052 150.646l2.998.113-.334 8.839-2.998-.113zM145.311 156.384l6.711 6.701-2.12 2.123-6.711-6.701zM146.296 170.903l.115 2.998-8.837.34-.115-2.998zM164.485 189.069c-1.619 0-3.142-.631-4.286-1.775-2.363-2.364-2.363-6.21 0-8.573 1.145-1.145 2.667-1.775 4.286-1.775s3.141.631 4.286 1.775c1.146 1.146 1.776 2.668 1.776 4.287s-.631 3.142-1.777 4.286c-1.143 1.144-2.665 1.775-4.285 1.775zm-.001-9.124c-.818 0-1.586.318-2.165.896-1.193 1.193-1.193 3.137.001 4.331 1.155 1.156 3.173 1.156 4.328 0 .58-.579.898-1.348.898-2.165 0-.818-.319-1.587-.897-2.166-.578-.577-1.347-.896-2.165-.896zM151.455 187.972l7.978 7.976-2.121 2.122-7.978-7.976zM179.821 174.293l21.573-21.573-2.121-2.121-26.787 26.787 2.121 2.121 3.171-3.171c1.461 4.073.459 8.707-2.642 11.807-2.17 2.17-5.051 3.358-8.126 3.304l-1.858-.023.368 1.82c.979 4.844-.517 9.816-4.003 13.303-2.772 2.771-6.458 4.299-10.379 4.299-3.921 0-7.607-1.527-10.379-4.299-2.772-2.772-4.299-6.458-4.299-10.378 0-3.921 1.527-7.606 4.299-10.379 3.489-3.487 8.461-4.984 13.302-4.004l1.821.369-.023-1.857c-.039-3.071 1.135-5.958 3.305-8.128 3.222-3.224 7.965-4.157 12.082-2.546l-3.261 3.262 2.121 2.121 26.786-26.788-2.121-2.121-21.254 21.255c-5.464-2.73-12.086-1.694-16.475 2.696-2.33 2.33-3.752 5.312-4.1 8.536-5.271-.551-10.514 1.294-14.304 5.084-3.339 3.339-5.178 7.777-5.178 12.499 0 4.723 1.838 9.161 5.178 12.5 3.447 3.447 7.973 5.17 12.5 5.17 4.526-.001 9.054-1.724 12.5-5.17 3.788-3.787 5.626-9.031 5.084-14.303 3.223-.348 6.206-1.771 8.535-4.101 4.223-4.221 5.376-10.696 2.869-16.112l-.305.141z" />
      </Group>

      <Group
        css={`
          fill: ${getValueForLogo('colorMedium')};
        `}
      >
        <Path d="M91.256 43.218l-12.158 12.159 2.121 2.121 12.479-12.48c1.647.896 3.501 1.374 5.431 1.374 3.022 0 5.871-1.172 8.019-3.3 4.461-4.422 4.494-11.65.073-16.111-2.156-2.174-5.029-3.372-8.091-3.372-3.024 0-5.872 1.172-8.019 3.301-4.46 4.421-4.493 11.648-.072 16.11l.217.198zm13.781-2.258c-1.313 1.301-2.984 2.108-4.787 2.348.259-1.793 1.087-3.478 2.388-4.768 1.318-1.304 2.964-2.107 4.785-2.347-.249 1.747-1.039 3.432-2.386 4.767zm2.274-7.78c-2.557.274-4.93 1.394-6.784 3.229-1.837 1.821-2.976 4.221-3.277 6.764-1.535-.35-2.944-1.12-4.081-2.265-1.157-1.167-1.891-2.593-2.221-4.091 2.542-.279 4.947-1.406 6.785-3.227 1.854-1.838 2.993-4.203 3.29-6.76 1.53.351 2.935 1.12 4.067 2.262 1.157 1.167 1.891 2.592 2.221 4.088zm-14.087-4.14c1.313-1.302 2.985-2.109 4.79-2.349-.256 1.802-1.078 3.465-2.392 4.768-1.302 1.29-2.99 2.102-4.784 2.346.249-1.747 1.039-3.43 2.386-4.765zM94.973 69.127c1.058 3.457 2.942 6.648 5.538 9.243l15.086 15.087 2.121-2.121-15.086-15.087c-3.623-3.621-5.636-8.582-5.62-13.693.268-2.09.235-4.277-.13-6.508l-2.961.484c.295 1.805.346 3.575.165 5.268l-.081-.003-.007.652c-.5 3.466-1.987 6.578-4.364 8.954-2.471 2.47-5.644 3.898-9.08 4.367l-.528.006.003.074c-6.168.656-13.122-1.789-18.449-7.115-8.47-8.471-9.668-21.056-2.671-28.055 4.021-4.021 10.198-5.496 16.522-3.951l.713-2.914c-7.351-1.799-14.587-.025-19.357 4.744-8.167 8.169-6.968 22.657 2.672 32.297 5.342 5.341 12.173 8.09 18.592 8.09.855 0 1.699-.067 2.535-.165 5.175-.072 10.225 1.952 13.894 5.621l15.087 15.087 2.121-2.121-15.087-15.089c-2.597-2.597-5.788-4.482-9.247-5.54 1.599-.834 3.084-1.899 4.401-3.216 1.3-1.3 2.374-2.782 3.218-4.396zM85.229 42.314l-15.705 15.705-2.121-2.121 15.705-15.705z" />
      </Group>

      <Group
        css={`
          fill: ${getValueForLogo('colorSoft')};
        `}
      >
        <Path d="M78.449 156.778l6.012 6.485-2.2 2.04-6.012-6.485zM79.916 147.199h9.484v3h-9.484zM82.255 132.095l2.202 2.038-6.006 6.49-2.202-2.038z" />
        <Path d="M71 131.282l-19 14.437v-11.719h-35v28h16v-.053l-14.575 24.837 2.583 1.52 11.992-20.431v19.127h3v-19.127l12.005 20.431 2.583-1.52-14.588-24.837v.053h16v-11.754l19 14.438v-33.402zm-22 27.718h-29v-22h29v22zm19-.359l-14.041-10.658 14.041-10.658v21.316zM37 151h-10v-9h-3v12h13z" />
      </Group>

      <Group
        css={`
          fill: ${getValueForLogo('colorHard')};
        `}
      >
        <Path d="M229.018 224.537h-3v-28.066h27.787v3h-24.787zM265 223.637v-27.277c3-1.403 4.801-4.316 4.801-7.554 0-4.647-3.73-8.428-8.378-8.428-3.499 0-6.56 2.184-7.807 5.351l-14.868-14.881-14.145 14.152c-1.41-2.766-4.274-4.621-7.497-4.621-4.647 0-8.677 3.78-8.677 8.428 0 4.068 3.571 7.509 6.571 8.268v25.85c-3 .758-6.569 4.197-6.569 8.267 0 4.647 3.906 8.486 8.553 8.486 3.255 0 6.3-1.677 7.697-4.677h29.22c1.397 3 4.316 4.677 7.572 4.677 4.647 0 8.328-3.81 8.328-8.458 0-3.236-1.801-6.178-4.801-7.583zm-15.403-37.637h-21.673l10.836-10.837 10.837 10.837zm11.876 50.619c-2.336 0-4.404-1.434-5.145-3.652l-.342-.967h-33.389l-.343.967c-.742 2.219-2.809 3.682-5.145 3.682-2.993 0-5.428-2.45-5.428-5.443 0-2.944 2.146-5.384 5.093-5.429l1.227-.029v-31.494l-1.227-.023c-2.946-.046-5.218-2.479-5.218-5.423 0-2.993 2.498-5.428 5.491-5.428 2.573 0 4.842 1.864 5.351 4.382l.274 1.239h33.24l.243-1.239c.508-2.519 2.745-4.364 5.319-4.364 2.993 0 5.428 2.426 5.428 5.419 0 2.323-1.58 4.383-3.783 5.131l-1.119.339v31.423l1.117.346c2.203.75 3.734 2.813 3.734 5.135 0 2.993-2.385 5.428-5.378 5.428z" />
      </Group>

      <Group
        css={`
          fill: ${getValueForLogo('colorHard')};
          transform-origin: 50% 50%;
        `}
        animation={css`
          ${publicAnimate} 0.6s 3679ms
        `}
      >
        <Path d="M760.571 211.204h3v19.567h-3zM750.25 184.847c-5.212 0-9.452-4.24-9.452-9.451v-4.627c0-5.213 4.24-9.453 9.452-9.453 5.211 0 9.45 4.24 9.45 9.453v4.627c0 5.21-4.239 9.451-9.45 9.451zm0-20.532c-3.558 0-6.452 2.895-6.452 6.453v4.627c0 3.558 2.895 6.451 6.452 6.451s6.45-2.894 6.45-6.451v-4.627c0-3.558-2.893-6.453-6.45-6.453zM777.397 230.771h-3v-22.349c0-6.247-5.082-11.329-11.328-11.329h-22.527v-3h22.527c7.9 0 14.328 6.428 14.328 14.329v22.349zM805.077 211.204h3v19.567h-3zM794.755 184.847c-5.211 0-9.451-4.24-9.451-9.451v-4.627c0-5.213 4.24-9.453 9.451-9.453s9.451 4.24 9.451 9.453v4.627c0 5.21-4.24 9.451-9.451 9.451zm0-20.532c-3.558 0-6.451 2.895-6.451 6.453v4.627c0 3.558 2.894 6.451 6.451 6.451s6.451-2.894 6.451-6.451v-4.627c0-3.558-2.894-6.453-6.451-6.453zM821.903 230.771h-3v-22.349c0-6.247-5.082-11.329-11.328-11.329h-22.527v-3h22.527c7.9 0 14.328 6.428 14.328 14.329v22.349zM646.002 211.204h3v19.567h-3zM659.323 184.847c-5.211 0-9.451-4.24-9.451-9.451v-4.627c0-5.213 4.24-9.453 9.451-9.453 5.212 0 9.452 4.24 9.452 9.453v4.627c0 5.21-4.24 9.451-9.452 9.451zm0-20.532c-3.558 0-6.451 2.895-6.451 6.453v4.627c0 3.558 2.894 6.451 6.451 6.451s6.452-2.894 6.452-6.451v-4.627c0-3.558-2.894-6.453-6.452-6.453zM635.175 230.771h-3v-22.349c0-7.901 6.429-14.329 14.33-14.329h22.526v3h-22.526c-6.247 0-11.33 5.082-11.33 11.329v22.349zM690.764 211.204h3v19.567h-3zM714.407 211.204h3v19.567h-3zM704.086 184.847c-5.212 0-9.452-4.24-9.452-9.451v-4.627c0-5.213 4.24-9.453 9.452-9.453 5.211 0 9.45 4.24 9.45 9.453v4.627c0 5.21-4.239 9.451-9.45 9.451zm0-20.532c-3.558 0-6.452 2.895-6.452 6.453v4.627c0 3.558 2.895 6.451 6.452 6.451s6.45-2.894 6.45-6.451v-4.627c0-3.558-2.893-6.453-6.45-6.453zM716.905 194h-26.097c-7.901 0-14.809 6.521-14.809 14.423v22.577h3v-22.577c0-6.247 5.562-11.423 11.809-11.423h26.097c6.246 0 11.095 5.176 11.095 11.423v22.577h3v-22.577c0-7.902-6.194-14.423-14.095-14.423z" />
      </Group>

      <Group
        css={`
          fill: ${getValueForLogo('colorMedium')};
          transform-origin: 50% 50%;
        `}
        animation={css`
          ${publicAnimate} 0.6s 4038ms
        `}
      >
        <Path d="M796.234 135.804c-5.211 0-9.451-4.24-9.451-9.452v-4.625c0-5.212 4.24-9.453 9.451-9.453s9.451 4.241 9.451 9.453v4.625c.001 5.212-4.24 9.452-9.451 9.452zm0-20.53c-3.558 0-6.451 2.895-6.451 6.453v4.625c0 3.558 2.894 6.452 6.451 6.452s6.451-2.895 6.451-6.452v-4.625c.001-3.558-2.893-6.453-6.451-6.453zM823.383 181.729h-3v-22.35c0-6.246-5.082-11.328-11.329-11.328h-22.527v-3h22.527c7.901 0 14.329 6.427 14.329 14.328v22.35zM705.309 135.804c-5.211 0-9.451-4.24-9.451-9.452v-4.625c0-5.212 4.24-9.453 9.451-9.453s9.451 4.241 9.451 9.453v4.625c0 5.212-4.24 9.452-9.451 9.452zm0-20.53c-3.558 0-6.451 2.895-6.451 6.453v4.625c0 3.558 2.894 6.452 6.451 6.452s6.451-2.895 6.451-6.452v-4.625c0-3.558-2.894-6.453-6.451-6.453zM681.16 181.729h-3v-22.35c0-7.9 6.428-14.328 14.329-14.328h22.526v3h-22.526c-6.247 0-11.329 5.082-11.329 11.328v22.35zM750.07 135.804c-5.211 0-9.451-4.24-9.451-9.452v-4.625c0-5.212 4.24-9.453 9.451-9.453s9.451 4.241 9.451 9.453v4.625c0 5.212-4.24 9.452-9.451 9.452zm0-20.53c-3.558 0-6.451 2.895-6.451 6.453v4.625c0 3.558 2.894 6.452 6.451 6.452s6.451-2.895 6.451-6.452v-4.625c0-3.558-2.893-6.453-6.451-6.453zM762.89 145h-26.097c-7.9 0-14.793 6.479-14.793 14.379v22.621h3v-22.621c0-6.246 5.547-11.379 11.793-11.379h26.097c6.247 0 11.11 5.133 11.11 11.379v22.621h3v-22.621c0-7.9-6.209-14.379-14.11-14.379z" />
      </Group>

      <Group
        css={`
          fill: ${getValueForLogo('colorSoft')};
          transform-origin: 50% 50%;
        `}
        animation={css`
          ${publicAnimate} 0.6s 4512ms
        `}
      >
        <Path d="M770.878 119.871h3v15.099h-3zM817.092 109.124c-5.212 0-9.452-4.24-9.452-9.451v-4.627c0-5.212 4.24-9.453 9.452-9.453 5.211 0 9.451 4.241 9.451 9.453v4.627c0 5.211-4.24 9.451-9.451 9.451zm0-20.532c-3.558 0-6.452 2.895-6.452 6.453v4.627c0 3.557 2.895 6.451 6.452 6.451s6.451-2.894 6.451-6.451v-4.627c0-3.558-2.894-6.453-6.451-6.453zM844.24 155.049h-3v-22.349c0-6.247-5.083-11.329-11.33-11.329h-13.914v-3h13.914c7.901 0 14.33 6.428 14.33 14.329v22.349zM727.646 110.239c-5.211 0-9.451-4.24-9.451-9.452v-4.626c0-5.212 4.24-9.453 9.451-9.453s9.451 4.241 9.451 9.453v4.626c.001 5.212-4.24 9.452-9.451 9.452zm0-20.531c-3.558 0-6.451 2.895-6.451 6.453v4.626c0 3.558 2.894 6.452 6.451 6.452s6.451-2.895 6.451-6.452v-4.626c.001-3.558-2.893-6.453-6.451-6.453zM772.377 110.239c-5.211 0-9.451-4.24-9.451-9.452v-4.626c0-5.212 4.24-9.453 9.451-9.453 5.212 0 9.452 4.241 9.452 9.453v4.626c0 5.212-4.24 9.452-9.452 9.452zm0-20.531c-3.558 0-6.451 2.895-6.451 6.453v4.626c0 3.558 2.894 6.452 6.451 6.452s6.452-2.895 6.452-6.452v-4.626c0-3.558-2.894-6.453-6.452-6.453zM828.479 134.014h3v12.027h-3zM726.146 119.871h3v15.099h-3z" />
      </Group>

      <Group
        css={`
          transform-origin: 50% 50%;
        `}
        animation={css`
          ${logoAnimate} 0.6s 2.2s
        `}
      >
        <Path d="M420.784 138.429c0 8.194-.862 14.827-7.17 20.704-5.661 5.281-12.508 7.115-19.409 7.707-6.038.541-13.855-.377-18.924-3.936-6.955-5.014-8.302-12.453-8.302-21.888v-52.294l20.487 1.725v47.334c0 2.535-.108 5.984 1.239 8.248 1.51 2.375 4.583 3.182 7.17 3.074 2.319-.107 5.177-.971 6.901-2.803 2.588-2.535 2.318-6.361 2.318-9.758v-44.641l15.797 1.294v45.233h-.107zM445.962 161.072l-18.923 1.564v-47.229l18.923.593v45.072zm0-50.193l-18.923-.809v-16.335l18.923 1.563v15.581zM483.701 158.27l-19.139 1.617v-47.874l-13.748-.595v-15.689l46.366 3.828v13.857l-13.479-.594zM350.859 67.802h202.282v121.36h-202.282l161.793-20.219v-80.922z" />
      </Group>

      <Group
        css={`
          transform-origin: 50% 50%;
        `}
        animation={css`
          ${logoAnimate} 0.6s 2.6s
        `}
      >
        <Path d="M374.819 229.734h-8.253v-2.979c-1.221 2.293-3.236 3.441-6.045 3.441-2.59 0-4.688-1.012-6.3-3.033-1.61-2.023-2.416-4.963-2.416-8.816 0-3.604.809-6.465 2.428-8.582 1.617-2.119 3.758-3.176 6.42-3.176 2.222 0 4.053.844 5.494 2.535v-9.508h8.672v30.118zm-8.672-14.431c0-2.014-.831-3.021-2.493-3.021-1.162 0-1.923.639-2.284 1.918-.36 1.279-.54 2.848-.54 4.701 0 3.633.927 5.449 2.78 5.449.706 0 1.305-.287 1.798-.859.493-.574.739-1.449.739-2.625v-5.563zM402.068 229.734h-8.385c-.206-.957-.309-2.002-.309-3.135-1.589 2.398-3.994 3.598-7.215 3.598-2.648 0-4.63-.678-5.946-2.031-1.317-1.352-1.975-2.902-1.975-4.654 0-2.367 1.077-4.283 3.232-5.748 2.153-1.465 5.976-2.34 11.462-2.637v-.508c0-.984-.225-1.641-.673-1.963-.449-.324-1.107-.486-1.975-.486-2.03 0-3.163.816-3.398 2.449l-8.031-.748c1.147-4.693 5.053-7.039 11.716-7.039 1.81 0 3.472.18 4.987.539 1.515.361 2.714.924 3.596 1.689.883.764 1.476 1.572 1.776 2.426.302.855.453 2.494.453 4.92v8.959c.002 1.705.228 3.162.685 4.369zm-9.134-10.502c-3.751.395-5.626 1.596-5.626 3.596 0 1.354.742 2.029 2.229 2.029.94 0 1.742-.279 2.404-.838s.993-1.795.993-3.707v-1.08zM419.809 207.295v5.715h-4.479v8.273c0 1.133.213 1.805.64 2.02.427.213.867.32 1.324.32.705 0 1.544-.125 2.516-.377v6.266c-1.737.34-3.443.51-5.119.51-2.707 0-4.697-.582-5.969-1.744-1.272-1.162-1.909-3.014-1.909-5.561l.022-2.625v-7.082h-3.354v-5.715h3.354l.133-7.305 8.362-.131v7.436h4.479zM445.712 229.734h-8.385c-.207-.957-.31-2.002-.31-3.135-1.588 2.398-3.993 3.598-7.215 3.598-2.648 0-4.63-.678-5.946-2.031-1.316-1.352-1.975-2.902-1.975-4.654 0-2.367 1.077-4.283 3.232-5.748s5.976-2.34 11.463-2.637v-.508c0-.984-.226-1.641-.673-1.963-.45-.324-1.107-.486-1.976-.486-2.03 0-3.163.816-3.397 2.449l-8.032-.748c1.148-4.693 5.054-7.039 11.718-7.039 1.808 0 3.471.18 4.985.539 1.515.361 2.714.924 3.597 1.689.883.764 1.475 1.572 1.776 2.426.301.855.452 2.494.452 4.92v8.959c.001 1.705.229 3.162.686 4.369zm-9.135-10.502c-3.751.395-5.627 1.596-5.627 3.596 0 1.354.743 2.029 2.229 2.029.94 0 1.743-.279 2.404-.838.663-.559.994-1.795.994-3.707v-1.08zM454.604 229.734h-4.965v-30.117h8.672v10.348c1.205-2.09 3.125-3.133 5.758-3.133 1.854 0 3.428.484 4.721 1.455 1.295.973 2.26 2.357 2.891 4.16.633 1.803.949 3.695.949 5.68 0 3.619-.811 6.535-2.426 8.75-1.619 2.213-4.031 3.32-7.238 3.32-3.162 0-5.566-1.184-7.215-3.553-.472.883-.853 1.913-1.147 3.09zm3.707-8.363c0 2.207.852 3.309 2.559 3.309.928 0 1.637-.398 2.131-1.201.49-.801.736-2.451.736-4.953 0-2.723-.277-4.432-.836-5.131-.561-.697-1.252-1.047-2.076-1.047-.648 0-1.227.25-1.742.75s-.771 1.229-.771 2.184v6.089zM498.754 229.734h-8.385c-.207-.957-.309-2.002-.309-3.135-1.59 2.398-3.994 3.598-7.215 3.598-2.648 0-4.631-.678-5.947-2.031-1.316-1.352-1.975-2.902-1.975-4.654 0-2.367 1.076-4.283 3.232-5.748s5.977-2.34 11.463-2.637v-.508c0-.984-.225-1.641-.674-1.963-.449-.324-1.107-.486-1.975-.486-2.031 0-3.162.816-3.396 2.449l-8.031-.748c1.146-4.693 5.051-7.039 11.715-7.039 1.809 0 3.471.18 4.986.539 1.516.361 2.715.924 3.598 1.689.883.764 1.475 1.572 1.775 2.426.303.855.451 2.494.451 4.92v8.959c.001 1.705.232 3.162.687 4.369zm-9.135-10.502c-3.752.395-5.627 1.596-5.627 3.596 0 1.354.742 2.029 2.229 2.029.941 0 1.744-.279 2.404-.838.662-.559.994-1.795.994-3.707v-1.08zM524.547 229.734h-8.805v-14.121c0-1.162-.18-1.906-.539-2.229-.361-.322-.814-.484-1.357-.484-1.604 0-2.406 1.117-2.406 3.352v13.482h-8.803v-22.439h8.164v3.178c1.205-2.428 3.361-3.641 6.465-3.641 1.633 0 3.01.311 4.137.938 1.125.625 1.932 1.434 2.416 2.426.484.994.729 2.719.729 5.174v14.364zM552.369 207.295l-6.781 7.707 7.553 14.732h-9.1l-4.209-8.986-2.4 2.807v6.18h-8.252v-30.117h8.252v12.156c0 .338-.021 1.691-.066 4.059.529-.75 1.068-1.434 1.611-2.051l5.633-6.486h7.759z" />
      </Group>

      <Path
        className="line line--left line--theater"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        stroke={getValueForLogo('colorHard')}
        d="M219.5 99v18.5h117.5"
        css={`
          stroke-dasharray: 136;
          stroke-dashoffset: 136;
        `}
        animation={drawAnimationLineLeft}
      />

      <Path
        className="line line--left line--art"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        stroke={getValueForLogo('colorHard')}
        d="M338 157.5h-99.5v7.5"
        css={`
          stroke-dasharray: 107;
          stroke-dashoffset: -107;
        `}
        animation={drawAnimationLineLeft}
      />

      <Path
        className="line line--left line--guitar"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        stroke={getValueForLogo('colorMedium')}
        d="M217 147.5h121"
        css={`
          stroke-dasharray: 121;
          stroke-dashoffset: 121;
        `}
        animation={drawAnimationLineLeft}
      />

      <Path
        className="line line--left line--tennis"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        stroke={getValueForLogo('colorMedium')}
        d="M103.5 109v18.5h233.5"
        css={`
          stroke-dasharray: 252;
          stroke-dashoffset: 252;
        `}
        animation={drawAnimationLineLeft}
      />

      <Path
        className="line line--left line--movie"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        stroke={getValueForLogo('colorSoft')}
        d="M102 138.5h235"
        css={`
          stroke-dasharray: 235;
          stroke-dashoffset: 235;
        `}
        animation={drawAnimationLineLeft}
      />

      <Path
        className="line line--right line--public--front"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        stroke={getValueForLogo('colorHard')}
        d="M578 150.5h55.5v9.5"
        css={`
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
        `}
        animation={drawAnimationLineRight}
      />

      <Path
        className="line line--right line--public--mid"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        stroke={getValueForLogo('colorMedium')}
        d="M579 140.5h89"
        css={`
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
        `}
        animation={drawAnimationLineRight}
      />

      <Path
        className="line line--right line--public--back"
        strokeWidth="3"
        strokeMiterlimit="10"
        fill="none"
        stroke={getValueForLogo('colorSoft')}
        d="M578 130.5h90.5v-18h11.5"
        css={`
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
        `}
        animation={drawAnimationLineRight}
      />
    </Svg>
  );
};

const Column = ({ value, title, children, ...props }) => (
  <Stack as="article" flex={1} spacing={4} {...props}>
    <Stack as="blockquote" alignItems="center">
      <Box as="p" fontSize="4rem" fontWeight={300} lineHeight="4rem">
        {value}
      </Box>
      <Box as="h2" fontSize="1.2rem">
        {title}
      </Box>
    </Stack>
    <Box as="p" textAlign={{ m: 'center' }}>
      {children}
    </Box>
  </Stack>
);

Column.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  children: PropTypes.node,
};

const useRedirectToLanguage = () => {
  const router = useRouter();
  const { language } = router.query;
  const { i18n } = useTranslation();

  const { setCookie } = useCookiesWithOptions();

  useEffect(() => {
    if (!language) return;

    if (['nl', 'fr'].includes(language)) {
      i18n.changeLanguage(language);
      setCookie('udb-language', language);
    } else {
      router.push('/login/nl');
    }
  }, [language]);
};

const ResponsiveContainer = (props) => (
  <Inline
    maxWidth={{ default: 1170, l: 970, m: 750 }}
    paddingX={{ default: 4, m: 6, s: 6 }}
    width="100%"
    {...props}
  />
);

const FooterLink = (props) => (
  <Link
    {...props}
    css={`
      text-decoration: underline;
      color: #555;
      &:hover {
        color: #222;
      }
    `}
  />
);

const LanguageSwitcherButton = (props) => (
  <Button
    {...props}
    variant={ButtonVariants.UNSTYLED}
    css={`
      text-decoration: underline;
      color: #004f94;
      &:hover {
        color: #222;
      }
    `}
  />
);

const MainChannelLink = () => {
  const { t } = useTranslation();
  return (
    <FooterLink href={t('main.channels_info_link_url')} css="display: inline">
      {t('main.channels_info_link_text')}
    </FooterLink>
  );
};

const Index = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const { removeAuthenticationCookies } = useCookiesWithOptions();
  const { publicRuntimeConfig } = getConfig();

  const changeLanguage = (language) => () => router.push(`/login/${language}`);

  const handleClickLogin = () => {
    removeAuthenticationCookies();

    const queryString = new URLSearchParams({
      destination: `${window.location.protocol}//${window.location.host}`,
      lang: i18n.language,
    });

    router.push(`${publicRuntimeConfig.authUrl}/connect?${queryString}`);
  };

  useRedirectToLanguage();

  return (
    <Stack
      width="100%"
      alignItems="center"
      spacing={6}
      backgroundColor={getValueForPage('backgroundColor')}
    >
      <Stack as="div" width="100%">
        <Stack
          alignItems="center"
          spacing={4}
          padding={5}
          backgroundColor={getValueForLogo('backgroundColor')}
        >
          <Animation height="100%" maxHeight={316} />
          <Box as="h1" display="none">
            {t('brand')}
          </Box>
          <Stack alignItems="center" paddingX={4}>
            <Box
              as="span"
              color="white"
              textAlign="center"
              fontSize="2rem"
              fontWeight={300}
            >
              {t('main.lead')}
            </Box>
            <Box
              as="span"
              color="white"
              textAlign="center"
              fontSize="1.6rem"
              fontWeight={300}
            >
              {t('main.lead_sub')}
            </Box>
          </Stack>
        </Stack>

        <Inline padding={5} backgroundColor="white" justifyContent="center">
          <Button onClick={handleClickLogin} size={ButtonSizes.LARGE}>
            {t('main.start')}
          </Button>
        </Inline>
      </Stack>

      <Stack as="div">
        <Inline width="100%" justifyContent="center">
          <ResponsiveContainer
            stackOn={Breakpoints.M}
            spacing={{ default: 5, m: 6 }}
            paddingY={5}
            minHeight={336}
          >
            <Column value="215.000" title={t('main.activities')}>
              {t('main.activities_info')}
            </Column>
            <Column value="500" title={t('main.channels')}>
              <Trans i18nKey="main.channels_info">
                UiTdatabank levert informatie aan meer dan <MainChannelLink />,
                waaronder UiTinvlaanderen, websites van steden en gemeenten,
                thema-agenda's, gedrukte bladen en mobiele apps. Ook jouw
                activiteit kan verschijnen op vele agenda's.
              </Trans>
            </Column>
            <Column value="28.000" title={t('main.organizers')}>
              {t('main.organizers_info')}
            </Column>
          </ResponsiveContainer>
        </Inline>

        <ResponsiveContainer
          fontSize="1.5rem"
          fontWeight={300}
          justifyContent="center"
        >
          <Box as="p" textAlign="center">
            {t('main.mission')}
          </Box>
        </ResponsiveContainer>
      </Stack>

      <Inline width="100%" backgroundColor="#ccc" justifyContent="center">
        <ResponsiveContainer
          justifyContent={{ default: 'space-between', xs: 'flex-start' }}
          alignItems={{ xs: 'center' }}
          stackOn={Breakpoints.XS}
          spacing={5}
          paddingY={5}
        >
          <Stack alignItems="flex-start">
            <List alignItems={{ xs: 'center' }}>
              <List.Item>
                <FooterLink href="mailto:vragen@uitdatabank.be">
                  {t('footer.contact')}
                </FooterLink>
              </List.Item>
              <List.Item>
                <FooterLink href="http://www.publiq.be/nl/project/uitdatabank">
                  {t('footer.about')}
                </FooterLink>
              </List.Item>
              <List.Item>
                <FooterLink href="http://documentatie.uitdatabank.be">
                  {t('footer.dev')}
                </FooterLink>
              </List.Item>
              <List.Item>
                <Inline spacing={3}>
                  <FooterLink
                    href={
                      'http://www.publiq.be/' +
                      i18n.language +
                      '/' +
                      t('footer.legal_path')
                    }
                  >
                    {t('footer.legal')}
                  </FooterLink>
                  <FooterLink href="http://www.publiq.be/nl/privacy-uitdatabank">
                    {t('footer.privacy')}
                  </FooterLink>
                </Inline>
              </List.Item>
            </List>
          </Stack>

          <Stack
            spacing={3}
            alignItems={{ default: 'flex-end', xs: 'center' }}
            justifyContent="flex-start"
          >
            <Inline as="p" spacing={2} className="footer-by">
              <Box as="span">{t('footer.by')}</Box>
              <FooterLink href="http://www.publiq.be">publiq vzw</FooterLink>
            </Inline>
            <Image src={`/assets/${t('main.flanders_image')}`} width={150} />
            <Inline>
              <LanguageSwitcherButton onClick={changeLanguage('nl')}>
                Nederlands
              </LanguageSwitcherButton>
              <LanguageSwitcherButton
                variant={ButtonVariants.UNSTYLED}
                onClick={changeLanguage('fr')}
              >
                Français
              </LanguageSwitcherButton>
            </Inline>
          </Stack>
        </ResponsiveContainer>
      </Inline>
    </Stack>
  );
};

export const getServerSideProps = () => ({ props: {} });

export default Index;
