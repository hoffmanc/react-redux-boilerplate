import React from 'react';
import WrenchIcon from '@material-ui/icons/Build'
import VignetteIcon from '@material-ui/icons/Vignette'
import SignatureIcon from './images/aquifer-signature-icon.png'

const DocumentSetIcon = ({docSet}) => {
  switch(docSet.kind){
    case 'signature':
      return <img src={SignatureIcon} alt="Signature Course" />
    case 'custom':
      return <WrenchIcon />
    default:
      return <VignetteIcon />
  }
}

export default DocumentSetIcon

