import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {zones, directions} from './Enums.js'

class Mid extends Component{
  static propTypes = {
    onZoneChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <svg width={167.273} height={152.278} viewBox="0 0 156.819 142.76" 
      // {...props}
      >
      <text
        style={{
          lineHeight: '125%',
          InkscapeFontSpecification: "'sans-serif Medium'",
          textAlign: 'start',
        }}
        x={506.376}
        y={253.252}
        fontWeight={500}
        fontSize={17.5}
        fontFamily="sans-serif"
        letterSpacing={0}
        wordSpacing={0}
        fill="#85c5eb"
        transform="translate(-506.23 -239.284)"
      >
        <tspan x={506.376} y={253.252}>
          {'R'}
        </tspan>
      </text>
      <text
        y={253.509}
        x={652.359}
        style={{
          lineHeight: '125%',
          InkscapeFontSpecification: "'sans-serif Medium'",
          textAlign: 'start',
        }}
        fontWeight={500}
        fontSize={17.5}
        fontFamily="sans-serif"
        letterSpacing={0}
        wordSpacing={0}
        fill="#85c5eb"
        transform="translate(-506.23 -239.284)"
      >
        <tspan y={253.509} x={652.359}>
          {'L'}
        </tspan>
      </text>
      <path
        style={{
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1,
        }}
        d="M118.154 19.79c-1.02 2.237-.61 5.064-1.048 7.497 1.616 2.347 4.246 4.218 5.908 6.702 4.35 5.874 7.286 12.894 8.416 20.152.235 6.693.663 13.619-2.022 19.927-2.146 6.387-7.242 11.777-13.742 13.69-7.519 2.621-17.185.182-23.71-4.262-.064.625-.31.778-.407 1.063-.098.284-.766.183-.955.316-.378.264-1.716-.104-3.37-1.35-2.67-2.299-7.02-7.511-10.767-7.707-4.37 1.957-6.606 7.028-11.003 8.853-.22-.383-.518-2.347-.792-2.856-.274-.51-.525.435-.872.648-3.993 2.93-8.223 5.963-13.329 6.555-4.811.765-10.021.572-14.223-2.181-5.706-3.586-10.475-8.967-12.23-15.596-2.549-7.858-2.818-16.646.529-24.307 2.597-6.753 7.085-12.61 12.215-17.677-.007-3.091-.076-6.341-.439-9.399-5.904 2.238-10.485 7.05-15.311 11.03-5.424 4.863-9.699 10.925-13.34 17.198C4.07 54.814.597 61.96.56 69.76.284 79.864 1.733 90.403 6.726 99.329c5.592 7.983 13.617 14.216 22.495 18.177 13.236 5.867 28.008 5.15 42.141 5.815 16.973.524 34.405-.139 50.56-5.858 10.653-4.313 20.409-11.606 26.582-21.4 4.312-7.563 4.78-16.62 4.65-25.128-.078-8.213-2.658-16.213-6.866-23.224-6.651-11.568-16.641-21.396-28.074-28.188l-.06.266z"
        color="#000"
        overflow="visible"
        fill="#f1c3cf"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={0.126}
      />
      <path
        style={{
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1,
        }}
        d="M56.975 21.516c-5.876.043-11.034 3.226-16.14 5.74-2.903 1.434-5.747 3.183-7.67 5.857-5.428 6.711-10.146 14.533-11.051 23.282-.322 4.704.346 9.46 1.585 13.997 1.453 5.053 4.213 9.766 8.217 13.218 3.075 2.808 6.905 4.89 11 5.712 5.484.333 11.247-.41 15.975-3.4 4.496-2.707 8.515-6.463 10.765-11.273 2.602-5.15 4.508-10.695 5.188-16.442.661-4.804.46-9.695.084-14.516a54.25 54.25 0 00-4.387-15.364c-1.44-3.376-4.74-5.638-8.288-6.299a21.56 21.56 0 00-5.278-.512zm8.683 37.958c.082.122-.085.21 0 0zm-8.5.018c.125.174-.065.241 0 0z"
        color="#000"
        overflow="visible"
        fill="#fef700"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={0.063}
      />
      <path
        d="M117.886 19.213l-.8 8.46-3.66-2.162-4.03-2.168s-2.086-.858-3.176-1.128c-1.447-.358-2.936-.597-4.425-.64-2.07-.06-4.226-.132-6.187.53-3.025 1.02-5.962 2.98-8.086 5.13-2.123 2.151-3.487 4.805-4.903 7.398-1.515 2.752-2.5 5.797-2.591 9.061-.092 3.264-.917 7.345-1.601 8.259-.685.914-1.169.935-1.87.3-2.264-2.049-1.045-6.214-1.752-9.283-.94-4.08-1.633-8.28-3.307-12.119-1.06-2.43-2.053-5.195-4.196-6.754-2.97-2.16-7.023-2.595-10.695-2.652-2.163-.033-4.29.686-6.343 1.367-2.49.827-7.159 3.27-7.159 3.27l-6.12 3.302-.332-9.93c8.287-4.145 17.626-9.13 25.809-10.96 6.703-1.432 13.683-2.15 20.506-1.503 8.716.826 17.267 3.485 25.368 6.806 3.386 1.388 9.55 5.416 9.55 5.416z"
        fill="none"
        stroke="#000"
        strokeWidth={0.355}
      />
      <path
        d="M36.86 29.488c-4.012 3.447-7.175 7.897-9.758 12.512-2.216 3.96-4.086 8.265-4.772 12.75-.704 4.606.764 13.956.764 13.956s2.918 8.908 6 12.25c3.648 3.956 8.61 7.136 13.875 8.25 4.106.869 12.5-1.5 12.5-1.5s6.849-3.726 9.5-6.5c2.677-2.8 4.588-6.32 6.125-9.875 1.986-4.592 3.19-9.544 3.875-14.5.42-3.044.321-6.152.125-9.218-.234-3.655-.555-7.325-1.547-10.875-.502-1.798-1.07-3.202-1.588-5.036-.518-1.834-1.454-3.662-2.49-5.261-1.79-2.767-5.393-3.95-8.562-4.688-2.833-.66-5.886-.284-8.72.375-3.618.842-10.202 4.485-10.202 4.485s-3.64 1.598-5.125 2.875z"
        fill="none"
        stroke="#000"
        strokeWidth={0.355}
      />
      <path
        style={{
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1,
        }}
        d="M76.08 6.949c-5.723.272-11.474 1-16.977 2.65-7.803 2.494-15.09 6.31-22.368 10.016-.333.579.05 1.365-.046 2.03.114 2.454.043 4.92.27 7.366.41.639 1.11-.13 1.567-.318 3.7-1.918 7.39-3.885 11.25-5.455 3.905-1.529 8.25-1.94 12.352-.934 2.62.517 5.305 1.662 6.903 3.928 2.357 3.12 3.24 7.037 4.42 10.703a52.925 52.925 0 011.492 8.294c.199 2.012-.162 4.183.749 6.058.363.46.556 1.355 1.241 1.387 3.018.282 3.018-8.765 3.516-11.654.755-4.152 3.024-7.844 5.345-11.317 2.236-3.214 5.636-5.598 9.256-7.073 2.774-1.039 5.809-.818 8.678-.554 3.702.37 6.982 2.263 10.192 4.01.977.509 1.857 1.227 2.886 1.622.603-.165.327-1.022.487-1.492.206-2.237.494-4.492.609-6.72-1.043-.901-2.38-1.555-3.564-2.318a52.534 52.534 0 00-10.19-4.83c-8.52-3.179-17.509-5.363-26.64-5.453-.416.082-.954-.047-1.428.054z"
        color="#000"
        overflow="visible"
        fill="#0092ff"
        fillOpacity={0.881}
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={0.044}
      />
      <path
        d="M36.86 29.488c-4.012 3.447-7.175 7.897-9.758 12.512-2.216 3.96-4.086 8.265-4.772 12.75-.704 4.606.764 13.956.764 13.956s2.918 8.908 6 12.25c3.648 3.956 8.61 7.136 13.875 8.25 4.106.869 12.5-1.5 12.5-1.5s6.849-3.726 9.5-6.5c2.677-2.8 4.588-6.32 6.125-9.875 1.986-4.592 3.19-9.544 3.875-14.5.42-3.044.321-6.152.125-9.218-.234-3.655-.555-7.325-1.547-10.875-.502-1.798-1.07-3.202-1.588-5.036-.518-1.834-1.454-3.662-2.49-5.261-1.79-2.767-5.393-3.95-8.562-4.688-2.833-.66-5.886-.284-8.72.375-3.618.842-10.202 4.485-10.202 4.485s-3.64 1.598-5.125 2.875z"
        fill="none"
        stroke="#000"
        strokeWidth={0.355}
      />
      <path
        style={{
          isolation: 'auto',
          mixBlendMode: 'normal',
          solidColor: '#000',
          solidOpacity: 1,
        }}
        d="M100.297 21.534c-6.41-.216-12.169 3.773-15.543 9.008-4.047 5.624-5.255 12.647-5.18 19.436-.31 10.174 2.692 20.49 8.443 28.884 4.797 6.116 12.51 10.546 20.465 9.715 8.16-.036 16.25-4.72 19.65-12.255 5.862-12.256 4.367-27.249-2.648-38.72-3.5-6.174-8.917-11.221-15.51-13.938a21.193 21.193 0 00-9.677-2.13z"
        color="#000"
        overflow="visible"
        fill="#fef700"
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={0.126}
      />
      <path
        d="M118.572 28.913c4.012 3.447 6.977 8.247 9.228 13.087 2.276 4.896 3.716 10.283 4.108 15.667.312 4.284-.17 8.7-1.427 12.807-1.325 4.33-3.053 8.883-6.309 12.03-3.41 3.294-8.146 5.346-12.814 6.172-3.963.7-8.225.165-12.014-1.19-3.551-1.271-6.79-3.57-9.412-6.28-2.693-2.784-4.587-6.32-6.125-9.875-1.986-4.592-3.19-9.544-3.875-14.5-.42-3.044-.332-6.152-.125-9.218-.027-9.814 4.983-21.323 15.027-25.064 8.254-2.905 17.736 1.562 23.738 6.364z"
        fill="none"
        stroke="#000"
        strokeWidth={0.355}
      />
      <path
        d="M22.76 59.411l51.594.084M133.201 60.315L120.61 117.14M77.326 6.875l-.085 45.76M132.106 59.615l20.879 8.4M21.817 60.145l-20.879 8.4M22.852 68.093l9.591 50.911"
        fill="none"
        stroke="#000"
        strokeWidth={0.355}
        strokeDasharray="4.2585744,4.2585744"
      />
      <text
        y={255.666}
        x={568.871}
        style={{
          lineHeight: '125%',
        }}
        fontWeight={400}
        fontSize={14.195}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.as} direction={directions.right} onClick={this.props.onZoneChange} y={255.666} x={568.871} fontSize={8.872}>
          {'AS'}
        </tspan>
      </text>
      <text
        style={{
          lineHeight: '125%',
        }}
        x={587.371}
        y={255.666}
        fontWeight={400}
        fontSize={14.195}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.as} direction={directions.left} onClick={this.props.onZoneChange} x={587.371} y={255.666} fontSize={8.872}>
          {'AS'}
        </tspan>
      </text>
      <path
        d="M77.207 52.536l-.084 70.26"
        fill="none"
        stroke="#000"
        strokeWidth={0.355}
        strokeDasharray="4.2585744,4.2585744"
      />
      <text
        style={{
          lineHeight: '125%',
        }}
        x={550.486}
        y={289.607}
        fontWeight={400}
        fontSize={14.195}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.tza} direction={directions.right} onClick={this.props.onZoneChange} x={550.486} y={289.607} fontSize={8.872}>
          {'TZa'}
        </tspan>
      </text>
      <text
        y={289.607}
        x={601.044}
        style={{
          lineHeight: '125%',
        }}
        fontWeight={400}
        fontSize={14.195}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.tza} direction={directions.left} onClick={this.props.onZoneChange} y={289.607} x={601.044} fontSize={8.872}>
          {'TZa'}
        </tspan>
      </text>
      <path
        d="M64.778 81.396c-2.295 2.285-5.228 4.025-7.952 5.631-3.31 1.951-9.027 2.825-13.612 2.387-2.84-.272-5.599-1.507-8-3.05-3.217-2.069-6.071-4.86-8.17-8.06-2.198-3.349-3.435-7.305-4.336-11.208-.393-1.7-.498-3.44-.662-5.188-.164-1.748-.211-3.705-.045-5.441.358-3.75 1.481-7.271 2.891-10.678 1.39-3.356 3.273-6.522 5.417-9.453 1.89-2.583 4.649-4.967 6.497-7.07-.41-3.132-.002-7.565-.406-9.627-3.878 1.407-7.504 4.382-10.352 6.78-.92.775-2.908 2.377-3.709 3.057-3.328 2.727-5.496 5.146-7.814 8.093-3.51 4.464-6.628 9.286-9.12 14.388C3.411 56.04 1.573 60.314.813 64.795-.11 70.24.149 75.893.938 81.358c.82 5.684 2.024 11.507 4.75 16.562 2.215 4.11 5.62 7.541 9.125 10.625 3.884 3.418 8.277 6.345 12.965 8.534 4.82 2.251 10.047 3.66 15.285 4.591 8.836 1.573 17.904 1.366 26.875 1.625 7.726.223 15.497.716 23.187-.062 9.96-1.008 20.132-2.248 29.438-5.938 6.019-2.386 11.63-5.983 16.5-10.25 4.097-3.589 8.007-7.72 10.375-12.625 2.452-5.078 3.218-10.911 3.554-16.541.381-6.38.19-13.008-1.768-19.092-2.73-8.485-7.76-16.27-13.523-23.07-5.516-6.508-12.685-12.063-19.66-16.39-.16 2.317-.907 6.262-1.155 8.392 1.955 1.707 4.216 3.897 5.922 6.187 2.207 2.962 4.141 6.19 5.48 9.634 1.872 4.817 3.306 9.949 3.447 15.114.15 5.498-.745 11.156-2.784 16.264-1.296 3.244-3.215 6.395-5.834 8.706-2.633 2.323-6.015 3.844-9.413 4.729-3.225.84-6.704 1.006-9.988.442-3.524-.605-6.937-2.087-9.944-4.022l-3.365-3.071s1.664 1.452 1.375 2.296c-.205.598-1.141.78-1.766.688-2.576-.383-6.14-4.828-6.14-4.828s-4-3.125-4.5-3.25-2.563-1.188-3-1c-.438.187-3 1.937-3.188 2.062-.188.125-2.063 2.313-2.5 2.875-.438.563-3 2.75-3.563 3.125-.562.375-1.46.985-1.898.485-.438-.5-.449-2.759-.449-2.759zm23.239-2.451c-2.314-3.124-4.223-6.74-5.559-10.391-1.245-3.402-2.046-6.977-2.563-10.562-.434-3.008-.123-7.219-.223-9.878-.025-.658-.413 1.96-.843 3.013-.43 1.054-.833 1.357-1.497 1.694-.942.477-2.116-2.823-2.116-2.823.04 2.866-.154 5.742-.42 8.482-.266 2.74-1.229 5.516-2.105 8.218-1.016 3.08-2.116 5.966-3.668 8.706"
        fill="none"
        stroke="#000"
        strokeWidth={0.355}
      />
      <text
        style={{
          lineHeight: '125%',
        }}
        x={608.469}
        y={312.941}
        fontWeight={400}
        fontSize={14.195}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.tzp} direction={directions.left} onClick={this.props.onZoneChange} x={608.469} y={312.941} fontSize={8.872}>
          {'TZp'}
        </tspan>
      </text>
      <text
        y={312.941}
        x={540.586}
        style={{
          lineHeight: '125%',
        }}
        fontWeight={400}
        fontSize={14.195}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.tzp} direction={directions.right} onClick={this.props.onZoneChange} y={312.941} x={540.586} fontSize={8.872}>
          {'TZp'}
        </tspan>
      </text>
      <path
        d="M80.39 59.411l51.594.084"
        fill="none"
        stroke="#000"
        strokeWidth={0.355}
        strokeDasharray="4.2585744,4.2585744"
      />
      <text
        style={{
          lineHeight: '125%',
        }}
        x={510.935}
        y={298.806}
        fontWeight={400}
        fontSize={13.434}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.pza} direction={directions.right} onClick={this.props.onZoneChange} x={510.935} y={298.806} fontSize={8.396}>
          {'PZa'}
        </tspan>
      </text>
      <text
        y={332.04}
        x={511.642}
        style={{
          lineHeight: '125%',
        }}
        fontWeight={400}
        fontSize={13.434}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.pzpl} direction={directions.left} onClick={this.props.onZoneChange} y={332.04} x={511.642} fontSize={8.396}>
          {'PZpl'}
        </tspan>
      </text>
      <text
        style={{
          lineHeight: '125%',
        }}
        x={511.642}
        y={332.04}
        fontWeight={400}
        fontSize={13.434}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.pzpl} direction={directions.right} onClick={this.props.onZoneChange} x={511.642} y={332.04} fontSize={8.396}>
          {'PZpl'}
        </tspan>
      </text>
      <text
        y={332.04}
        x={635.739}
        style={{
          lineHeight: '125%',
        }}
        fontWeight={400}
        fontSize={13.434}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.pzpl} direction={directions.left} onClick={this.props.onZoneChange} y={332.04} x={635.739} fontSize={8.396}>
          {'PZpl'}
        </tspan>
      </text>
      <text
        y={298.806}
        x={510.935}
        style={{
          lineHeight: '125%',
        }}
        fontWeight={400}
        fontSize={13.434}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.pza} direction={directions.right} onClick={this.props.onZoneChange} y={298.806} x={510.935} fontSize={8.396}>
          {'PZa'}
        </tspan>
      </text>
      <text
        style={{
          lineHeight: '125%',
        }}
        x={638.921}
        y={298.806}
        fontWeight={400}
        fontSize={13.434}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.pza} direction={directions.left} onClick={this.props.onZoneChange} x={638.921} y={298.806} fontSize={8.396}>
          {'PZa'}
        </tspan>
      </text>
      <text
        style={{
          lineHeight: '125%',
        }}
        x={597.909}
        y={347.243}
        fontWeight={400}
        fontSize={13.434}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.pzpm} direction={directions.left} onClick={this.props.onZoneChange} x={597.909} y={347.243} fontSize={8.396}>
          {'PZpm'}
        </tspan>
      </text>
      <text
        y={347.243}
        x={549.118}
        style={{
          lineHeight: '125%',
        }}
        fontWeight={400}
        fontSize={13.434}
        fontFamily="Sans"
        letterSpacing={0}
        wordSpacing={0}
        transform="translate(-506.23 -239.284)"
      >
        <tspan zone={zones.pzpm} direction={directions.right} onClick={this.props.onZoneChange} y={347.243} x={549.118} fontSize={8.396}>
          {'PZpm'}
        </tspan>
      </text>
      <text
        style={{
          lineHeight: '125%',
          InkscapeFontSpecification: "'sans-serif Medium'",
          textAlign: 'start',
        }}
        x={569.855}
        y={378.596}
        fontWeight={500}
        fontSize={17.5}
        fontFamily="sans-serif"
        letterSpacing={0}
        wordSpacing={0}
        fill="#85c5eb"
        transform="translate(-506.23 -239.284)"
      >
        <tspan
          x={569.855}
          y={378.596}
          style={{
            InkscapeFontSpecification: "'sans-serif Medium'",
          }}
          fontSize={15}
        >
          {'Mid'}
        </tspan>
      </text>
      <g cursor="pointer" fill="none">
        <path
          d="M35.86 20.216l.253 8.839-4.104 4.04-5.177 7.387-4.104 9.218-1.2 6.44.064 3.283-20.519 8.586 1.137-6.314 2.21-6.629 5.429-10.29 7.071-9.913 9.849-8.902zM118.141 20.216l-.252 8.839 4.103 4.04 5.177 7.387 4.104 9.218 1.2 6.44-.063 3.283 20.518 8.586-1.136-6.314-2.21-6.629-5.43-10.29-7.07-9.913-9.85-8.902zM37.321 19.724l.358 8.84 5.982-4.018 8.571-3.304 8.125-.357 6.875 1.607 3.572 4.554 4.107 12.143.893 10.089.714 2.143V7.224l-8.66.804-12.412 3.571zM117.397 19.724l-.357 8.84-5.982-4.018-8.571-3.304-8.125-.357-5 2.857-4.554 4.554-5 10.893-.893 10.089-.714 2.143V7.224l8.66.804 12.858 3.304z"
        />
        <path
          d="M49.464 23.92L36.34 31.333l-9.196 11.964-3.929 11.875v3.036h50.179l.714-11.34-1.964-10.446-5.268-11.16-5.446-2.322-10.536.535-1.786.536M96.696 23.028l-5.892 2.5-4.375 4.018-3.661 7.143-1.964 7.321-.268 11.786.625 2.053h49.464s-.804-4.91-.982-5.535c-.179-.625-3.304-10.179-3.304-10.179l-9.018-11.25-9.107-5.714-7.321-3.125zM81.128 60.117h49.308s0 .442.063.884-.694 7.324-.694 7.324l-2.273 7.891-4.988 6.188-7.197 4.04-6.945 1.263-7.324-.82-7.386-4.168-6.314-6.313-5.745-12.817zM22.855 60.117h50.76l-.884 4.609L68.185 75.9l-5.366 6.25-7.703 4.925-12.753 1.578-9.533-5.62-5.998-7.26-3.598-10.922zM133.66 61.242l18.572 7.857-.178 8.661-.804 9.018-4.554 11.786-6.517 7.232-9.286 6.518-9.464 4.553z"
        />
        <path
          d="M128.163 78.363l-8.334 38.765-11.49 4.545-16.415 1.768-13.385-.758-.757-45.33 3.788 1.389 4.04 4.04 5.177 4.041 1.263-1.894 5.935 3.03 11.111 2.526 6.693-1.263 7.197-3.41zM19.969 61.242L1.397 69.1l.179 8.661.803 9.018 4.554 11.786 6.518 7.232 9.285 6.518 9.465 4.553zM25.736 78.363l8.333 38.765 11.49 4.545 16.416 1.768 13.384-.758.758-45.33-3.788 1.389-4.04 4.04-5.178 4.041-1.262-1.894-5.935 3.03-11.112 2.526-6.692-1.263-7.197-3.41z"
        />
      </g>
    </svg>
    )
  }
}

export default Mid;
