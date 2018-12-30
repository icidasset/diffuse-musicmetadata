import * as musicMetadata from "music-metadata-browser"
import { StreamingHttpTokenReader } from "streaming-http-token-reader"

import asf from "music-metadata/lib/asf"
import flac from "music-metadata/lib/flac"
import mp4 from "music-metadata/lib/mp4"
import mpeg from "music-metadata/lib/mpeg"
import ogg from "music-metadata/lib/ogg"
import wavpack from "music-metadata/lib/wavpack"


self.musicMetadata = musicMetadata
self.musicMetadata.parsers = { asf, flac, mp4, mpeg, ogg, wavpack }
self.musicMetadata.parsingOptions = { loadParser }
self.StreamingHttpTokenReader = StreamingHttpTokenReader


function loadParser(parser) {
  return Promise.resolve(
    new self.musicMetadata.parsers[parser]
  )
}
