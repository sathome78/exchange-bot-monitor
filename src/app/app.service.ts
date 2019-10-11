import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { Message } from '@stomp/stompjs';
import { RxStompService } from '@stomp/ng2-stompjs';
import { map } from 'rxjs/operators';

const data = [
  {
    name: 'ABBC/BTC',
    url_symbol: 'abbc_btc'
  },
  // {
  //   'name': 'ACT/BTC',
  //   'url_symbol': 'act_btc'
  // },
  // {
  //   'name': 'ACU/ETH',
  //   'url_symbol': 'acu_eth'
  // },
  // {
  //   'name': 'ADB/BTC',
  //   'url_symbol': 'adb_btc'
  // },
  // {
  //   'name': 'ADK/BTC',
  //   'url_symbol': 'adk_btc'
  // },
  // {
  //   'name': 'ADK/ETH',
  //   'url_symbol': 'adk_eth'
  // },
  // {
  //   'name': 'ADK/USD',
  //   'url_symbol': 'adk_usd'
  // },
  // {
  //   'name': 'AISI/BTC',
  //   'url_symbol': 'aisi_btc'
  // },
  // {
  //   'name': 'AISI/ETH',
  //   'url_symbol': 'aisi_eth'
  // },
  // {
  //   'name': 'AISI/USD',
  //   'url_symbol': 'aisi_usd'
  // },
  // {
  //   'name': 'AMN/BTC',
  //   'url_symbol': 'amn_btc'
  // },
  // {
  //   'name': 'AMN/ETH',
  //   'url_symbol': 'amn_eth'
  // },
  // {
  //   'name': 'AMN/USD',
  //   'url_symbol': 'amn_usd'
  // },
  // {
  //   'name': 'APL/ETH',
  //   'url_symbol': 'apl_eth'
  // },
  // {
  //   'name': 'ARK/BTC',
  //   'url_symbol': 'ark_btc'
  // },
  // {
  //   'name': 'ARK/ETH',
  //   'url_symbol': 'ark_eth'
  // },
  // {
  //   'name': 'ARN/BTC',
  //   'url_symbol': 'arn_btc'
  // },
  // {
  //   'name': 'ARN/ETH',
  //   'url_symbol': 'arn_eth'
  // },
  // {
  //   'name': 'ASG/USD',
  //   'url_symbol': 'asg_usd'
  // },
  // {
  //   'name': 'ATB/BTC',
  //   'url_symbol': 'atb_btc'
  // },
  // {
  //   'name': 'ATB/USD',
  //   'url_symbol': 'atb_usd'
  // },
  // {
  //   'name': 'ATB/USDT',
  //   'url_symbol': 'atb_usdt'
  // },
  // {
  //   'name': 'AUNIT/BTC',
  //   'url_symbol': 'aunit_btc'
  // },
  // {
  //   'name': 'AUNIT/ETH',
  //   'url_symbol': 'aunit_eth'
  // },
  // {
  //   'name': 'AUNIT/USD',
  //   'url_symbol': 'aunit_usd'
  // },
  // {
  //   'name': 'BAT/BTC',
  //   'url_symbol': 'bat_btc'
  // },
  // {
  //   'name': 'BAT/ETH',
  //   'url_symbol': 'bat_eth'
  // },
  // {
  //   'name': 'BAT/USD',
  //   'url_symbol': 'bat_usd'
  // },
  // {
  //   'name': 'BCA/BTC',
  //   'url_symbol': 'bca_btc'
  // },
  // {
  //   'name': 'BCA/USD',
  //   'url_symbol': 'bca_usd'
  // },
  // {
  //   'name': 'BCD/BTC',
  //   'url_symbol': 'bcd_btc'
  // },
  // {
  //   'name': 'BCD/USD',
  //   'url_symbol': 'bcd_usd'
  // },
  // {
  //   'name': 'BCH/BTC',
  //   'url_symbol': 'bch_btc'
  // },
  {
    name: 'BCH/ETH',
    url_symbol: 'bch_eth'
  },
  {
    name: 'BCH/USD',
    url_symbol: 'bch_usd'
  }
  // {
  //   'name': 'BCI/BTC',
  //   'url_symbol': 'bci_btc'
  // },
  // {
  //   'name': 'BCI/ETH',
  //   'url_symbol': 'bci_eth'
  // },
  // {
  //   'name': 'BCI/USD',
  //   'url_symbol': 'bci_usd'
  // },
  // {
  //   'name': 'BCX/USD',
  //   'url_symbol': 'bcx_usd'
  // },
  // {
  //   'name': 'BEET/BTC',
  //   'url_symbol': 'beet_btc'
  // },
  // {
  //   'name': 'BEET/ETH',
  //   'url_symbol': 'beet_eth'
  // },
  // {
  //   'name': 'BEET/USD',
  //   'url_symbol': 'beet_usd'
  // },
  // {
  //   'name': 'BEZ/BTC',
  //   'url_symbol': 'bez_btc'
  // },
  // {
  //   'name': 'BFG/ETH',
  //   'url_symbol': 'bfg_eth'
  // },
  // {
  //   'name': 'BIO/BTC',
  //   'url_symbol': 'bio_btc'
  // },
  // {
  //   'name': 'BIO/ETH',
  //   'url_symbol': 'bio_eth'
  // },
  // {
  //   'name': 'BIO/USD',
  //   'url_symbol': 'bio_usd'
  // },
  // {
  //   'name': 'BNB/BTC',
  //   'url_symbol': 'bnb_btc'
  // },
  // {
  //   'name': 'BNB/USD',
  //   'url_symbol': 'bnb_usd'
  // },
  // {
  //   'name': 'BNB/USDT',
  //   'url_symbol': 'bnb_usdt'
  // },
  // {
  //   'name': 'BPTN/USD',
  //   'url_symbol': 'bptn_usd'
  // },
  // {
  //   'name': 'BRB/BTC',
  //   'url_symbol': 'brb_btc'
  // },
  // {
  //   'name': 'BRB/ETH',
  //   'url_symbol': 'brb_eth'
  // },
  // {
  //   'name': 'BRB/USD',
  //   'url_symbol': 'brb_usd'
  // },
  // {
  //   'name': 'BRC/BTC',
  //   'url_symbol': 'brc_btc'
  // },
  // {
  //   'name': 'BSV/BTC',
  //   'url_symbol': 'bsv_btc'
  // },
  // {
  //   'name': 'BSV/ETH',
  //   'url_symbol': 'bsv_eth'
  // },
  // {
  //   'name': 'BSV/USD',
  //   'url_symbol': 'bsv_usd'
  // },
  // {
  //   'name': 'BTC/AED',
  //   'url_symbol': 'btc_aed'
  // },
  // {
  //   'name': 'BTC/CNY',
  //   'url_symbol': 'btc_cny'
  // },
  // {
  //   'name': 'BTC/EUR',
  //   'url_symbol': 'btc_eur'
  // },
  // {
  //   'name': 'BTC/IDR',
  //   'url_symbol': 'btc_idr'
  // },
  // {
  //   'name': 'BTC/NGN',
  //   'url_symbol': 'btc_ngn'
  // },
  // {
  //   'name': 'BTC/RUB',
  //   'url_symbol': 'btc_rub'
  // },
  // {
  //   'name': 'BTC/TRY',
  //   'url_symbol': 'btc_try'
  // },
  // {
  //   'name': 'BTC/UAH',
  //   'url_symbol': 'btc_uah'
  // },
  // {
  //   'name': 'BTC/USD',
  //   'url_symbol': 'btc_usd'
  // },
  // {
  //   'name': 'BTC/USDT',
  //   'url_symbol': 'btc_usdt'
  // },
  // {
  //   'name': 'BTC/VND',
  //   'url_symbol': 'btc_vnd'
  // },
  // {
  //   'name': 'BTCZ/BTC',
  //   'url_symbol': 'btcz_btc'
  // },
  // {
  //   'name': 'BTCZ/ETH',
  //   'url_symbol': 'btcz_eth'
  // },
  // {
  //   'name': 'BTCZ/USD',
  //   'url_symbol': 'btcz_usd'
  // },
  // {
  //   'name': 'BTG/BTC',
  //   'url_symbol': 'btg_btc'
  // },
  // {
  //   'name': 'BTG/USD',
  //   'url_symbol': 'btg_usd'
  // },
  // {
  //   'name': 'BTT/BTC',
  //   'url_symbol': 'btt_btc'
  // },
  // {
  //   'name': 'BTT/ETH',
  //   'url_symbol': 'btt_eth'
  // },
  // {
  //   'name': 'BTT/TRX',
  //   'url_symbol': 'btt_trx'
  // },
  // {
  //   'name': 'BTT/USD',
  //   'url_symbol': 'btt_usd'
  // },
  // {
  //   'name': 'BTW/BTC',
  //   'url_symbol': 'btw_btc'
  // },
  // {
  //   'name': 'BTW/ETH',
  //   'url_symbol': 'btw_eth'
  // },
  // {
  //   'name': 'BTW/USD',
  //   'url_symbol': 'btw_usd'
  // },
  // {
  //   'name': 'BTX/BTC',
  //   'url_symbol': 'btx_btc'
  // },
  // {
  //   'name': 'BTX/ETH',
  //   'url_symbol': 'btx_eth'
  // },
  // {
  //   'name': 'BTX/EUR',
  //   'url_symbol': 'btx_eur'
  // },
  // {
  //   'name': 'BTX/USD',
  //   'url_symbol': 'btx_usd'
  // },
  // {
  //   'name': 'CEEK/BTC',
  //   'url_symbol': 'ceek_btc'
  // },
  // {
  //   'name': 'CLO/USD',
  //   'url_symbol': 'clo_usd'
  // },
  // {
  //   'name': 'CLX/USD',
  //   'url_symbol': 'clx_usd'
  // },
  // {
  //   'name': 'CMIT/BTC',
  //   'url_symbol': 'cmit_btc'
  // },
  // {
  //   'name': 'CMK/USD',
  //   'url_symbol': 'cmk_usd'
  // },
  // {
  //   'name': 'CRBT/BTC',
  //   'url_symbol': 'crbt_btc'
  // },
  // {
  //   'name': 'CRBT/ETH',
  //   'url_symbol': 'crbt_eth'
  // },
  // {
  //   'name': 'CRBT/USD',
  //   'url_symbol': 'crbt_usd'
  // },
  // {
  //   'name': 'CREA/BTC',
  //   'url_symbol': 'crea_btc'
  // },
  // {
  //   'name': 'CREA/ETH',
  //   'url_symbol': 'crea_eth'
  // },
  // {
  //   'name': 'CREA/USD',
  //   'url_symbol': 'crea_usd'
  // },
  // {
  //   'name': 'CRON/BTC',
  //   'url_symbol': 'cron_btc'
  // },
  // {
  //   'name': 'CRON/ETH',
  //   'url_symbol': 'cron_eth'
  // },
  // {
  //   'name': 'CRON/USD',
  //   'url_symbol': 'cron_usd'
  // },
  // {
  //   'name': 'CRON/USDT',
  //   'url_symbol': 'cron_usdt'
  // },
  // {
  //   'name': 'CRYP/BTC',
  //   'url_symbol': 'cryp_btc'
  // },
  // {
  //   'name': 'CRYP/ETH',
  //   'url_symbol': 'cryp_eth'
  // },
  // {
  //   'name': 'CRYP/USD',
  //   'url_symbol': 'cryp_usd'
  // },
  // {
  //   'name': 'CSC/BTC',
  //   'url_symbol': 'csc_btc'
  // },
  // {
  //   'name': 'CSC/ETH',
  //   'url_symbol': 'csc_eth'
  // },
  // {
  //   'name': 'CSC/USD',
  //   'url_symbol': 'csc_usd'
  // },
  // {
  //   'name': 'DACC/BTC',
  //   'url_symbol': 'dacc_btc'
  // },
  // {
  //   'name': 'DACC/USD',
  //   'url_symbol': 'dacc_usd'
  // },
  // {
  //   'name': 'DARC/BTC',
  //   'url_symbol': 'darc_btc'
  // },
  // {
  //   'name': 'DASH/BTC',
  //   'url_symbol': 'dash_btc'
  // },
  // {
  //   'name': 'DASH/TUSD',
  //   'url_symbol': 'dash_tusd'
  // },
  // {
  //   'name': 'DASH/USD',
  //   'url_symbol': 'dash_usd'
  // },
  // {
  //   'name': 'DASH/USDT',
  //   'url_symbol': 'dash_usdt'
  // },
  // {
  //   'name': 'DCR/BTC',
  //   'url_symbol': 'dcr_btc'
  // },
  // {
  //   'name': 'DCR/ETH',
  //   'url_symbol': 'dcr_eth'
  // },
  // {
  //   'name': 'DCR/USD',
  //   'url_symbol': 'dcr_usd'
  // },
  // {
  //   'name': 'DGTX/BTC',
  //   'url_symbol': 'dgtx_btc'
  // },
  // {
  //   'name': 'DGTX/ETH',
  //   'url_symbol': 'dgtx_eth'
  // },
  // {
  //   'name': 'DGTX/USD',
  //   'url_symbol': 'dgtx_usd'
  // },
  // {
  //   'name': 'DIM.EUR/BTC',
  //   'url_symbol': 'dim.eur_btc'
  // },
  // {
  //   'name': 'DIM.USD/BTC',
  //   'url_symbol': 'dim.usd_btc'
  // },
  // {
  //   'name': 'DIM/BTC',
  //   'url_symbol': 'dim_btc'
  // },
  // {
  //   'name': 'DIM/ETH',
  //   'url_symbol': 'dim_eth'
  // },
  // {
  //   'name': 'DIM/USD',
  //   'url_symbol': 'dim_usd'
  // },
  // {
  //   'name': 'DIME/BTC',
  //   'url_symbol': 'dime_btc'
  // },
  // {
  //   'name': 'DIVI/BTC',
  //   'url_symbol': 'divi_btc'
  // },
  // {
  //   'name': 'DOGE/BTC',
  //   'url_symbol': 'doge_btc'
  // },
  // {
  //   'name': 'DOGE/USD',
  //   'url_symbol': 'doge_usd'
  // },
  // {
  //   'name': 'DOGE/USDT',
  //   'url_symbol': 'doge_usdt'
  // },
  // {
  //   'name': 'DRONE/ETH',
  //   'url_symbol': 'drone_eth'
  // },
  // {
  //   'name': 'DRONE/USD',
  //   'url_symbol': 'drone_usd'
  // },
  // {
  //   'name': 'DTRC/BTC',
  //   'url_symbol': 'dtrc_btc'
  // },
  // {
  //   'name': 'DTRC/ETH',
  //   'url_symbol': 'dtrc_eth'
  // },
  // {
  //   'name': 'DTRC/USD',
  //   'url_symbol': 'dtrc_usd'
  // },
  // {
  //   'name': 'ECHT/BTC',
  //   'url_symbol': 'echt_btc'
  // },
  // {
  //   'name': 'ECHT/ETH',
  //   'url_symbol': 'echt_eth'
  // },
  // {
  //   'name': 'ECHT/USD',
  //   'url_symbol': 'echt_usd'
  // },
  // {
  //   'name': 'ECTE/BTC',
  //   'url_symbol': 'ecte_btc'
  // },
  // {
  //   'name': 'ECTE/ETH',
  //   'url_symbol': 'ecte_eth'
  // },
  // {
  //   'name': 'ECTE/USD',
  //   'url_symbol': 'ecte_usd'
  // },
  // {
  //   'name': 'EDC/AED',
  //   'url_symbol': 'edc_aed'
  // },
  // {
  //   'name': 'EDC/BTC',
  //   'url_symbol': 'edc_btc'
  // },
  // {
  //   'name': 'EDC/CNY',
  //   'url_symbol': 'edc_cny'
  // },
  // {
  //   'name': 'EDC/IDR',
  //   'url_symbol': 'edc_idr'
  // },
  // {
  //   'name': 'EDC/NGN',
  //   'url_symbol': 'edc_ngn'
  // },
  // {
  //   'name': 'EDC/TRY',
  //   'url_symbol': 'edc_try'
  // },
  // {
  //   'name': 'EDC/USD',
  //   'url_symbol': 'edc_usd'
  // },
  // {
  //   'name': 'EDC/USDT',
  //   'url_symbol': 'edc_usdt'
  // },
  // {
  //   'name': 'EDC/VND',
  //   'url_symbol': 'edc_vnd'
  // },
  // {
  //   'name': 'ELT/BTC',
  //   'url_symbol': 'elt_btc'
  // },
  // {
  //   'name': 'ELT/ETH',
  //   'url_symbol': 'elt_eth'
  // },
  // {
  //   'name': 'ELT/EUR',
  //   'url_symbol': 'elt_eur'
  // },
  // {
  //   'name': 'EMBR/BTC',
  //   'url_symbol': 'embr_btc'
  // },
  // {
  //   'name': 'EMBR/ETH',
  //   'url_symbol': 'embr_eth'
  // },
  // {
  //   'name': 'EMBR/USD',
  //   'url_symbol': 'embr_usd'
  // },
  // {
  //   'name': 'eMTV/BTC',
  //   'url_symbol': 'emtv_btc'
  // },
  // {
  //   'name': 'eMTV/ETH',
  //   'url_symbol': 'emtv_eth'
  // },
  // {
  //   'name': 'EOS/BTC',
  //   'url_symbol': 'eos_btc'
  // },
  // {
  //   'name': 'EOS/USD',
  //   'url_symbol': 'eos_usd'
  // },
  // {
  //   'name': 'ETA/BTC',
  //   'url_symbol': 'eta_btc'
  // },
  // {
  //   'name': 'ETA/ETH',
  //   'url_symbol': 'eta_eth'
  // },
  // {
  //   'name': 'ETA/USD',
  //   'url_symbol': 'eta_usd'
  // },
  // {
  //   'name': 'ETC/BTC',
  //   'url_symbol': 'etc_btc'
  // },
  // {
  //   'name': 'ETC/USD',
  //   'url_symbol': 'etc_usd'
  // },
  // {
  //   'name': 'ETC/USDT',
  //   'url_symbol': 'etc_usdt'
  // },
  // {
  //   'name': 'ETH/BTC',
  //   'url_symbol': 'eth_btc'
  // },
  // {
  //   'name': 'ETH/RUB',
  //   'url_symbol': 'eth_rub'
  // },
  // {
  //   'name': 'ETH/UAH',
  //   'url_symbol': 'eth_uah'
  // },
  // {
  //   'name': 'ETH/USD',
  //   'url_symbol': 'eth_usd'
  // },
  // {
  //   'name': 'ETH/USDT',
  //   'url_symbol': 'eth_usdt'
  // },
  // {
  //   'name': 'ETI/BTC',
  //   'url_symbol': 'eti_btc'
  // },
  // {
  //   'name': 'ETI/ETH',
  //   'url_symbol': 'eti_eth'
  // },
  // {
  //   'name': 'ETI/USD',
  //   'url_symbol': 'eti_usd'
  // },
  // {
  //   'name': 'ETZ/BTC',
  //   'url_symbol': 'etz_btc'
  // },
  // {
  //   'name': 'EXO/BTC',
  //   'url_symbol': 'exo_btc'
  // },
  // {
  //   'name': 'EXO/ETH',
  //   'url_symbol': 'exo_eth'
  // },
  // {
  //   'name': 'EXO/USD',
  //   'url_symbol': 'exo_usd'
  // },
  // {
  //   'name': 'FGC/BTC',
  //   'url_symbol': 'fgc_btc'
  // },
  // {
  //   'name': 'FLOT/ETH',
  //   'url_symbol': 'flot_eth'
  // },
  // {
  //   'name': 'FSBT/BTC',
  //   'url_symbol': 'fsbt_btc'
  // },
  // {
  //   'name': 'FSBT/ETH',
  //   'url_symbol': 'fsbt_eth'
  // },
  // {
  //   'name': 'FSBT/USD',
  //   'url_symbol': 'fsbt_usd'
  // },
  // {
  //   'name': 'FST/BTC',
  //   'url_symbol': 'fst_btc'
  // },
  // {
  //   'name': 'FTO/BTC',
  //   'url_symbol': 'fto_btc'
  // },
  // {
  //   'name': 'GAPI/BTC',
  //   'url_symbol': 'gapi_btc'
  // },
  // {
  //   'name': 'GAPI/ETH',
  //   'url_symbol': 'gapi_eth'
  // },
  // {
  //   'name': 'GAPI/USD',
  //   'url_symbol': 'gapi_usd'
  // },
  // {
  //   'name': 'GAS/BTC',
  //   'url_symbol': 'gas_btc'
  // },
  // {
  //   'name': 'GAS/USD',
  //   'url_symbol': 'gas_usd'
  // },
  // {
  //   'name': 'GAS/USDT',
  //   'url_symbol': 'gas_usdt'
  // },
  // {
  //   'name': 'GET/ETH',
  //   'url_symbol': 'get_eth'
  // },
  // {
  //   'name': 'GEX/BTC',
  //   'url_symbol': 'gex_btc'
  // },
  // {
  //   'name': 'GIGC/BTC',
  //   'url_symbol': 'gigc_btc'
  // },
  // {
  //   'name': 'GNT/BTC',
  //   'url_symbol': 'gnt_btc'
  // },
  // {
  //   'name': 'GNT/USD',
  //   'url_symbol': 'gnt_usd'
  // },
  // {
  //   'name': 'GNY/BTC',
  //   'url_symbol': 'gny_btc'
  // },
  // {
  //   'name': 'GNY/ETH',
  //   'url_symbol': 'gny_eth'
  // },
  // {
  //   'name': 'GNY/USD',
  //   'url_symbol': 'gny_usd'
  // },
  // {
  //   'name': 'GOL/BTC',
  //   'url_symbol': 'gol_btc'
  // },
  // {
  //   'name': 'GOS/USD',
  //   'url_symbol': 'gos_usd'
  // },
  // {
  //   'name': 'GRS/BTC',
  //   'url_symbol': 'grs_btc'
  // },
  // {
  //   'name': 'GRS/ETH',
  //   'url_symbol': 'grs_eth'
  // },
  // {
  //   'name': 'GRS/USD',
  //   'url_symbol': 'grs_usd'
  // },
  // {
  //   'name': 'GST/BTC',
  //   'url_symbol': 'gst_btc'
  // },
  // {
  //   'name': 'GST/ETH',
  //   'url_symbol': 'gst_eth'
  // },
  // {
  //   'name': 'GST/USD',
  //   'url_symbol': 'gst_usd'
  // },
  // {
  //   'name': 'HCXP/BTC',
  //   'url_symbol': 'hcxp_btc'
  // },
  // {
  //   'name': 'HCXP/ETH',
  //   'url_symbol': 'hcxp_eth'
  // },
  // {
  //   'name': 'HCXP/USD',
  //   'url_symbol': 'hcxp_usd'
  // },
  // {
  //   'name': 'HDR/BTC',
  //   'url_symbol': 'hdr_btc'
  // },
  // {
  //   'name': 'HNI/BTC',
  //   'url_symbol': 'hni_btc'
  // },
  // {
  //   'name': 'HNI/ETH',
  //   'url_symbol': 'hni_eth'
  // },
  // {
  //   'name': 'HNI/USD',
  //   'url_symbol': 'hni_usd'
  // },
  // {
  //   'name': 'HOT/BTC',
  //   'url_symbol': 'hot_btc'
  // },
  // {
  //   'name': 'HOT/ETH',
  //   'url_symbol': 'hot_eth'
  // },
  // {
  //   'name': 'HOT/USD',
  //   'url_symbol': 'hot_usd'
  // },
  // {
  //   'name': 'HST/BTC',
  //   'url_symbol': 'hst_btc'
  // },
  // {
  //   'name': 'HT/BTC',
  //   'url_symbol': 'ht_btc'
  // },
  // {
  //   'name': 'HT/ETH',
  //   'url_symbol': 'ht_eth'
  // },
  // {
  //   'name': 'HT/USD',
  //   'url_symbol': 'ht_usd'
  // },
  // {
  //   'name': 'IDH/BTC',
  //   'url_symbol': 'idh_btc'
  // },
  // {
  //   'name': 'IDH/ETH',
  //   'url_symbol': 'idh_eth'
  // },
  // {
  //   'name': 'IDH/USD',
  //   'url_symbol': 'idh_usd'
  // },
  // {
  //   'name': 'INK/BTC',
  //   'url_symbol': 'ink_btc'
  // },
  // {
  //   'name': 'INK/ETH',
  //   'url_symbol': 'ink_eth'
  // },
  // {
  //   'name': 'INK/USD',
  //   'url_symbol': 'ink_usd'
  // },
  // {
  //   'name': 'INO/BTC',
  //   'url_symbol': 'ino_btc'
  // },
  // {
  //   'name': 'INO/ETH',
  //   'url_symbol': 'ino_eth'
  // },
  // {
  //   'name': 'INO/USD',
  //   'url_symbol': 'ino_usd'
  // },
  // {
  //   'name': 'IOTA/BTC',
  //   'url_symbol': 'iota_btc'
  // },
  // {
  //   'name': 'IOTA/USD',
  //   'url_symbol': 'iota_usd'
  // },
  // {
  //   'name': 'IOTA/USDT',
  //   'url_symbol': 'iota_usdt'
  // },
  // {
  //   'name': 'IQN/BTC',
  //   'url_symbol': 'iqn_btc'
  // },
  // {
  //   'name': 'IQN/ETH',
  //   'url_symbol': 'iqn_eth'
  // },
  // {
  //   'name': 'IQN/USD',
  //   'url_symbol': 'iqn_usd'
  // },
  // {
  //   'name': 'JET/ETH',
  //   'url_symbol': 'jet_eth'
  // },
  // {
  //   'name': 'KAT/BTC',
  //   'url_symbol': 'kat_btc'
  // },
  // {
  //   'name': 'KAT/ETH',
  //   'url_symbol': 'kat_eth'
  // },
  // {
  //   'name': 'KAT/USD',
  //   'url_symbol': 'kat_usd'
  // },
  // {
  //   'name': 'KWATT/BTC',
  //   'url_symbol': 'kwatt_btc'
  // },
  // {
  //   'name': 'KWATT/ETH',
  //   'url_symbol': 'kwatt_eth'
  // },
  // {
  //   'name': 'LCC/BTC',
  //   'url_symbol': 'lcc_btc'
  // },
  // {
  //   'name': 'LCC/ETH',
  //   'url_symbol': 'lcc_eth'
  // },
  // {
  //   'name': 'LCC/USD',
  //   'url_symbol': 'lcc_usd'
  // },
  // {
  //   'name': 'LEDU/BTC',
  //   'url_symbol': 'ledu_btc'
  // },
  // {
  //   'name': 'LEDU/ETH',
  //   'url_symbol': 'ledu_eth'
  // },
  // {
  //   'name': 'LHT/BTC',
  //   'url_symbol': 'lht_btc'
  // },
  // {
  //   'name': 'LHT/ETH',
  //   'url_symbol': 'lht_eth'
  // },
  // {
  //   'name': 'LHT/USD',
  //   'url_symbol': 'lht_usd'
  // },
  // {
  //   'name': 'LINA/BTC',
  //   'url_symbol': 'lina_btc'
  // },
  // {
  //   'name': 'LINA/ETH',
  //   'url_symbol': 'lina_eth'
  // },
  // {
  //   'name': 'LSK/BTC',
  //   'url_symbol': 'lsk_btc'
  // },
  // {
  //   'name': 'LSK/USD',
  //   'url_symbol': 'lsk_usd'
  // },
  // {
  //   'name': 'LSK/USDT',
  //   'url_symbol': 'lsk_usdt'
  // },
  // {
  //   'name': 'LTC/BTC',
  //   'url_symbol': 'ltc_btc'
  // },
  // {
  //   'name': 'LTC/TUSD',
  //   'url_symbol': 'ltc_tusd'
  // },
  // {
  //   'name': 'LTC/USD',
  //   'url_symbol': 'ltc_usd'
  // },
  // {
  //   'name': 'LTC/USDT',
  //   'url_symbol': 'ltc_usdt'
  // },
  // {
  //   'name': 'LUNES/BTC',
  //   'url_symbol': 'lunes_btc'
  // },
  // {
  //   'name': 'LUNES/ETH',
  //   'url_symbol': 'lunes_eth'
  // },
  // {
  //   'name': 'LUNES/USD',
  //   'url_symbol': 'lunes_usd'
  // },
  // {
  //   'name': 'MANA/BTC',
  //   'url_symbol': 'mana_btc'
  // },
  // {
  //   'name': 'MANA/ETH',
  //   'url_symbol': 'mana_eth'
  // },
  // {
  //   'name': 'MANA/USD',
  //   'url_symbol': 'mana_usd'
  // },
  // {
  //   'name': 'MASP/BTC',
  //   'url_symbol': 'masp_btc'
  // },
  // {
  //   'name': 'MCO/BTC',
  //   'url_symbol': 'mco_btc'
  // },
  // {
  //   'name': 'MCO/ETH',
  //   'url_symbol': 'mco_eth'
  // },
  // {
  //   'name': 'MCO/USD',
  //   'url_symbol': 'mco_usd'
  // },
  // {
  //   'name': 'MET/BTC',
  //   'url_symbol': 'met_btc'
  // },
  // {
  //   'name': 'MEXC/BTC',
  //   'url_symbol': 'mexc_btc'
  // },
  // {
  //   'name': 'MEXC/USDT',
  //   'url_symbol': 'mexc_usdt'
  // },
  // {
  //   'name': 'MFTU/BTC',
  //   'url_symbol': 'mftu_btc'
  // },
  // {
  //   'name': 'MNC/BTC',
  //   'url_symbol': 'mnc_btc'
  // },
  // {
  //   'name': 'MNC/ETH',
  //   'url_symbol': 'mnc_eth'
  // },
  // {
  //   'name': 'MNC/USD',
  //   'url_symbol': 'mnc_usd'
  // },
  // {
  //   'name': 'MODL/BTC',
  //   'url_symbol': 'modl_btc'
  // },
  // {
  //   'name': 'MODL/ETH',
  //   'url_symbol': 'modl_eth'
  // },
  // {
  //   'name': 'MODL/USD',
  //   'url_symbol': 'modl_usd'
  // },
  // {
  //   'name': 'MTC/BTC',
  //   'url_symbol': 'mtc_btc'
  // },
  // {
  //   'name': 'MTL/BTC',
  //   'url_symbol': 'mtl_btc'
  // },
  // {
  //   'name': 'MTL/ETH',
  //   'url_symbol': 'mtl_eth'
  // },
  // {
  //   'name': 'NAC/BTC',
  //   'url_symbol': 'nac_btc'
  // },
  // {
  //   'name': 'NBC/BTC',
  //   'url_symbol': 'nbc_btc'
  // },
  // {
  //   'name': 'NBTK/BTC',
  //   'url_symbol': 'nbtk_btc'
  // },
  // {
  //   'name': 'NEO/BTC',
  //   'url_symbol': 'neo_btc'
  // },
  // {
  //   'name': 'NEO/TUSD',
  //   'url_symbol': 'neo_tusd'
  // },
  // {
  //   'name': 'NEO/USD',
  //   'url_symbol': 'neo_usd'
  // },
  // {
  //   'name': 'NEO/USDT',
  //   'url_symbol': 'neo_usdt'
  // },
  // {
  //   'name': 'NIO/BTC',
  //   'url_symbol': 'nio_btc'
  // },
  // {
  //   'name': 'NIO/ETH',
  //   'url_symbol': 'nio_eth'
  // },
  // {
  //   'name': 'NIO/USD',
  //   'url_symbol': 'nio_usd'
  // },
  // {
  //   'name': 'NOVA/BTC',
  //   'url_symbol': 'nova_btc'
  // },
  // {
  //   'name': 'NPXS/BTC',
  //   'url_symbol': 'npxs_btc'
  // },
  // {
  //   'name': 'NPXS/ETH',
  //   'url_symbol': 'npxs_eth'
  // },
  // {
  //   'name': 'NPXS/USD',
  //   'url_symbol': 'npxs_usd'
  // },
  // {
  //   'name': 'NPXSXEM/BTC',
  //   'url_symbol': 'npxsxem_btc'
  // },
  // {
  //   'name': 'NTY/USD',
  //   'url_symbol': 'nty_usd'
  // },
  // {
  //   'name': 'NYC/ETH',
  //   'url_symbol': 'nyc_eth'
  // },
  // {
  //   'name': 'OCC/BTC',
  //   'url_symbol': 'occ_btc'
  // },
  // {
  //   'name': 'OCC/ETH',
  //   'url_symbol': 'occ_eth'
  // },
  // {
  //   'name': 'OCC/USD',
  //   'url_symbol': 'occ_usd'
  // },
  // {
  //   'name': 'OMG/BTC',
  //   'url_symbol': 'omg_btc'
  // },
  // {
  //   'name': 'OMG/USD',
  //   'url_symbol': 'omg_usd'
  // },
  // {
  //   'name': 'ORME/BTC',
  //   'url_symbol': 'orme_btc'
  // },
  // {
  //   'name': 'OWC/BTC',
  //   'url_symbol': 'owc_btc'
  // },
  // {
  //   'name': 'OWC/ETH',
  //   'url_symbol': 'owc_eth'
  // },
  // {
  //   'name': 'OWC/USD',
  //   'url_symbol': 'owc_usd'
  // },
  // {
  //   'name': 'PAT/BTC',
  //   'url_symbol': 'pat_btc'
  // },
  // {
  //   'name': 'PHI/USD',
  //   'url_symbol': 'phi_usd'
  // },
  // {
  //   'name': 'PLC/BTC',
  //   'url_symbol': 'plc_btc'
  // },
  // {
  //   'name': 'PLC/ETH',
  //   'url_symbol': 'plc_eth'
  // },
  // {
  //   'name': 'PLC/USD',
  //   'url_symbol': 'plc_usd'
  // },
  // {
  //   'name': 'PLTC/BTC',
  //   'url_symbol': 'pltc_btc'
  // },
  // {
  //   'name': 'PLTC/ETH',
  //   'url_symbol': 'pltc_eth'
  // },
  // {
  //   'name': 'PLTC/USD',
  //   'url_symbol': 'pltc_usd'
  // },
  // {
  //   'name': 'PPY/BTC',
  //   'url_symbol': 'ppy_btc'
  // },
  // {
  //   'name': 'Q/BTC',
  //   'url_symbol': 'q_btc'
  // },
  // {
  //   'name': 'QKC/BTC',
  //   'url_symbol': 'qkc_btc'
  // },
  // {
  //   'name': 'QKC/ETH',
  //   'url_symbol': 'qkc_eth'
  // },
  // {
  //   'name': 'QKC/USD',
  //   'url_symbol': 'qkc_usd'
  // },
  // {
  //   'name': 'QRK/BTC',
  //   'url_symbol': 'qrk_btc'
  // },
  // {
  //   'name': 'QRK/ETH',
  //   'url_symbol': 'qrk_eth'
  // },
  // {
  //   'name': 'QRK/USD',
  //   'url_symbol': 'qrk_usd'
  // },
  // {
  //   'name': 'QTUM/BTC',
  //   'url_symbol': 'qtum_btc'
  // },
  // {
  //   'name': 'QTUM/ETH',
  //   'url_symbol': 'qtum_eth'
  // },
  // {
  //   'name': 'QTUM/USD',
  //   'url_symbol': 'qtum_usd'
  // },
  // {
  //   'name': 'QUiNT/BTC',
  //   'url_symbol': 'quint_btc'
  // },
  // {
  //   'name': 'RAC/ETH',
  //   'url_symbol': 'rac_eth'
  // },
  // {
  //   'name': 'RDN/BTC',
  //   'url_symbol': 'rdn_btc'
  // },
  // {
  //   'name': 'RDN/ETH',
  //   'url_symbol': 'rdn_eth'
  // },
  // {
  //   'name': 'RDN/USD',
  //   'url_symbol': 'rdn_usd'
  // },
  // {
  //   'name': 'REB/BTC',
  //   'url_symbol': 'reb_btc'
  // },
  // {
  //   'name': 'REB/ETH',
  //   'url_symbol': 'reb_eth'
  // },
  // {
  //   'name': 'REB/USD',
  //   'url_symbol': 'reb_usd'
  // },
  // {
  //   'name': 'REN/BTC',
  //   'url_symbol': 'ren_btc'
  // },
  // {
  //   'name': 'REN/ETH',
  //   'url_symbol': 'ren_eth'
  // },
  // {
  //   'name': 'REN/USD',
  //   'url_symbol': 'ren_usd'
  // },
  // {
  //   'name': 'REP/BTC',
  //   'url_symbol': 'rep_btc'
  // },
  // {
  //   'name': 'REP/USD',
  //   'url_symbol': 'rep_usd'
  // },
  // {
  //   'name': 'RIME/BTC',
  //   'url_symbol': 'rime_btc'
  // },
  // {
  //   'name': 'RIME/ETH',
  //   'url_symbol': 'rime_eth'
  // },
  // {
  //   'name': 'RIME/USD',
  //   'url_symbol': 'rime_usd'
  // },
  // {
  //   'name': 'RNTB/BTC',
  //   'url_symbol': 'rntb_btc'
  // },
  // {
  //   'name': 'RNTB/USD',
  //   'url_symbol': 'rntb_usd'
  // },
  // {
  //   'name': 'RTH/BTC',
  //   'url_symbol': 'rth_btc'
  // },
  // {
  //   'name': 'RVC/BTC',
  //   'url_symbol': 'rvc_btc'
  // },
  // {
  //   'name': 'RVC/ETH',
  //   'url_symbol': 'rvc_eth'
  // },
  // {
  //   'name': 'RVC/USD',
  //   'url_symbol': 'rvc_usd'
  // },
  // {
  //   'name': 'RVT/BTC',
  //   'url_symbol': 'rvt_btc'
  // },
  // {
  //   'name': 'RVT/ETH',
  //   'url_symbol': 'rvt_eth'
  // },
  // {
  //   'name': 'RVT/USD',
  //   'url_symbol': 'rvt_usd'
  // },
  // {
  //   'name': 'RWDS/BTC',
  //   'url_symbol': 'rwds_btc'
  // },
  // {
  //   'name': 'RWDS/ETH',
  //   'url_symbol': 'rwds_eth'
  // },
  // {
  //   'name': 'RWDS/USD',
  //   'url_symbol': 'rwds_usd'
  // },
  // {
  //   'name': 'S4F/BTC',
  //   'url_symbol': 's4f_btc'
  // },
  // {
  //   'name': 'S4F/ETH',
  //   'url_symbol': 's4f_eth'
  // },
  // {
  //   'name': 'S4F/USD',
  //   'url_symbol': 's4f_usd'
  // },
  // {
  //   'name': 'SAT/ETH',
  //   'url_symbol': 'sat_eth'
  // },
  // {
  //   'name': 'SIM/BTC',
  //   'url_symbol': 'sim_btc'
  // },
  // {
  //   'name': 'SKILL/ETH',
  //   'url_symbol': 'skill_eth'
  // },
  // {
  //   'name': 'SLT/BTC',
  //   'url_symbol': 'slt_btc'
  // },
  // {
  //   'name': 'SPC/BTC',
  //   'url_symbol': 'spc_btc'
  // },
  // {
  //   'name': 'SPD/BTC',
  //   'url_symbol': 'spd_btc'
  // },
  // {
  //   'name': 'STOR/BTC',
  //   'url_symbol': 'stor_btc'
  // },
  // {
  //   'name': 'STOR/ETH',
  //   'url_symbol': 'stor_eth'
  // },
  // {
  //   'name': 'STOR/USD',
  //   'url_symbol': 'stor_usd'
  // },
  // {
  //   'name': 'STREAM/ETH',
  //   'url_symbol': 'stream_eth'
  // },
  // {
  //   'name': 'SUMO/BTC',
  //   'url_symbol': 'sumo_btc'
  // },
  // {
  //   'name': 'SWM/BTC',
  //   'url_symbol': 'swm_btc'
  // },
  // {
  //   'name': 'TAVITT/BTC',
  //   'url_symbol': 'tavitt_btc'
  // },
  // {
  //   'name': 'TCAT/BTC',
  //   'url_symbol': 'tcat_btc'
  // },
  // {
  //   'name': 'TCAT/ETH',
  //   'url_symbol': 'tcat_eth'
  // },
  // {
  //   'name': 'TERN/BTC',
  //   'url_symbol': 'tern_btc'
  // },
  // {
  //   'name': 'TERN/ETH',
  //   'url_symbol': 'tern_eth'
  // },
  // {
  //   'name': 'TERN/USD',
  //   'url_symbol': 'tern_usd'
  // },
  // {
  //   'name': 'TGAME/ETH',
  //   'url_symbol': 'tgame_eth'
  // },
  // {
  //   'name': 'TIC/BTC',
  //   'url_symbol': 'tic_btc'
  // },
  // {
  //   'name': 'TNR/ETH',
  //   'url_symbol': 'tnr_eth'
  // },
  // {
  //   'name': 'TRX/BTC',
  //   'url_symbol': 'trx_btc'
  // },
  // {
  //   'name': 'TRX/BTT',
  //   'url_symbol': 'trx_btt'
  // },
  // {
  //   'name': 'TRX/ETH',
  //   'url_symbol': 'trx_eth'
  // },
  // {
  //   'name': 'TRX/USD',
  //   'url_symbol': 'trx_usd'
  // },
  // {
  //   'name': 'TSL/BTC',
  //   'url_symbol': 'tsl_btc'
  // },
  // {
  //   'name': 'TTC/BTC',
  //   'url_symbol': 'ttc_btc'
  // },
  // {
  //   'name': 'TTP/ETH',
  //   'url_symbol': 'ttp_eth'
  // },
  // {
  //   'name': 'TTT/BTC',
  //   'url_symbol': 'ttt_btc'
  // },
  // {
  //   'name': 'TUSD/BTC',
  //   'url_symbol': 'tusd_btc'
  // },
  // {
  //   'name': 'TUSD/ETH',
  //   'url_symbol': 'tusd_eth'
  // },
  // {
  //   'name': 'TUSD/USD',
  //   'url_symbol': 'tusd_usd'
  // },
  // {
  //   'name': 'UCASH/BTC',
  //   'url_symbol': 'ucash_btc'
  // },
  // {
  //   'name': 'UCASH/ETH',
  //   'url_symbol': 'ucash_eth'
  // },
  // {
  //   'name': 'UCASH/USD',
  //   'url_symbol': 'ucash_usd'
  // },
  // {
  //   'name': 'uDOO/ETH',
  //   'url_symbol': 'udoo_eth'
  // },
  // {
  //   'name': 'UNC/BTC',
  //   'url_symbol': 'unc_btc'
  // },
  // {
  //   'name': 'UQC/BTC',
  //   'url_symbol': 'uqc_btc'
  // },
  // {
  //   'name': 'UQC/ETH',
  //   'url_symbol': 'uqc_eth'
  // },
  // {
  //   'name': 'UQC/USD',
  //   'url_symbol': 'uqc_usd'
  // },
  // {
  //   'name': 'USD/USDT',
  //   'url_symbol': 'usd_usdt'
  // },
  // {
  //   'name': 'USDC/BTC',
  //   'url_symbol': 'usdc_btc'
  // },
  // {
  //   'name': 'USDC/ETH',
  //   'url_symbol': 'usdc_eth'
  // },
  // {
  //   'name': 'USDC/USD',
  //   'url_symbol': 'usdc_usd'
  // },
  // {
  //   'name': 'VDG/ETH',
  //   'url_symbol': 'vdg_eth'
  // },
  // {
  //   'name': 'VEX/BTC',
  //   'url_symbol': 'vex_btc'
  // },
  // {
  //   'name': 'VINCI/BTC',
  //   'url_symbol': 'vinci_btc'
  // },
  // {
  //   'name': 'VOLLAR/BTC',
  //   'url_symbol': 'vollar_btc'
  // },
  // {
  //   'name': 'VOLLAR/ETH',
  //   'url_symbol': 'vollar_eth'
  // },
  // {
  //   'name': 'VOLLAR/USD',
  //   'url_symbol': 'vollar_usd'
  // },
  // {
  //   'name': 'VRA/BTC',
  //   'url_symbol': 'vra_btc'
  // },
  // {
  //   'name': 'VRA/ETH',
  //   'url_symbol': 'vra_eth'
  // },
  // {
  //   'name': 'VRA/USD',
  //   'url_symbol': 'vra_usd'
  // },
  // {
  //   'name': 'WAVES/BTC',
  //   'url_symbol': 'waves_btc'
  // },
  // {
  //   'name': 'WAVES/USD',
  //   'url_symbol': 'waves_usd'
  // },
  // {
  //   'name': 'WAVES/USDT',
  //   'url_symbol': 'waves_usdt'
  // },
  // {
  //   'name': 'WOLF/BTC',
  //   'url_symbol': 'wolf_btc'
  // },
  // {
  //   'name': 'WOLF/ETH',
  //   'url_symbol': 'wolf_eth'
  // },
  // {
  //   'name': 'WOLF/USD',
  //   'url_symbol': 'wolf_usd'
  // },
  // {
  //   'name': 'WTL/BTC',
  //   'url_symbol': 'wtl_btc'
  // },
  // {
  //   'name': 'WTL/ETH',
  //   'url_symbol': 'wtl_eth'
  // },
  // {
  //   'name': 'WTL/USD',
  //   'url_symbol': 'wtl_usd'
  // },
  // {
  //   'name': 'XAU/ETH',
  //   'url_symbol': 'xau_eth'
  // },
  // {
  //   'name': 'XAU/USD',
  //   'url_symbol': 'xau_usd'
  // },
  // {
  //   'name': 'XEM/BTC',
  //   'url_symbol': 'xem_btc'
  // },
  // {
  //   'name': 'XEM/USD',
  //   'url_symbol': 'xem_usd'
  // },
  // {
  //   'name': 'XEM/USDT',
  //   'url_symbol': 'xem_usdt'
  // },
  // {
  //   'name': 'XFC/BTC',
  //   'url_symbol': 'xfc_btc'
  // },
  // {
  //   'name': 'XFC/ETH',
  //   'url_symbol': 'xfc_eth'
  // },
  // {
  //   'name': 'XFC/USD',
  //   'url_symbol': 'xfc_usd'
  // },
  // {
  //   'name': 'XLM/BTC',
  //   'url_symbol': 'xlm_btc'
  // },
  // {
  //   'name': 'XLM/TUSD',
  //   'url_symbol': 'xlm_tusd'
  // },
  // {
  //   'name': 'XLM/USD',
  //   'url_symbol': 'xlm_usd'
  // },
  // {
  //   'name': 'XLM/USDT',
  //   'url_symbol': 'xlm_usdt'
  // },
  // {
  //   'name': 'XMR/BTC',
  //   'url_symbol': 'xmr_btc'
  // },
  // {
  //   'name': 'XMR/USD',
  //   'url_symbol': 'xmr_usd'
  // },
  // {
  //   'name': 'XMR/USDT',
  //   'url_symbol': 'xmr_usdt'
  // },
  // {
  //   'name': 'XRP/BTC',
  //   'url_symbol': 'xrp_btc'
  // },
  // {
  //   'name': 'XRP/TUSD',
  //   'url_symbol': 'xrp_tusd'
  // },
  // {
  //   'name': 'XRP/USD',
  //   'url_symbol': 'xrp_usd'
  // },
  // {
  //   'name': 'XRP/USDT',
  //   'url_symbol': 'xrp_usdt'
  // },
  // {
  //   'name': 'ZEC/BTC',
  //   'url_symbol': 'zec_btc'
  // },
  // {
  //   'name': 'ZEC/USD',
  //   'url_symbol': 'zec_usd'
  // },
  // {
  //   'name': 'ZEC/USDT',
  //   'url_symbol': 'zec_usdt'
  // },
  // {
  //   'name': 'ZIL/BTC',
  //   'url_symbol': 'zil_btc'
  // },
  // {
  //   'name': 'ZIL/ETH',
  //   'url_symbol': 'zil_eth'
  // },
  // {
  //   'name': 'ZIL/USD',
  //   'url_symbol': 'zil_usd'
  // },
  // {
  //   'name': 'ZRX/BTC',
  //   'url_symbol': 'zrx_btc'
  // },
  // {
  //   'name': 'ZRX/ETH',
  //   'url_symbol': 'zrx_eth'
  // },
  // {
  //   'name': 'ZRX/USD',
  //   'url_symbol': 'zrx_usd'
  // },
  // {
  //   'name': 'ZUBE/ETH',
  //   'url_symbol': 'zube_eth'
  // }
];


@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private stompService: RxStompService) {}

  public getCurrencyPairs(): Observable<any> {
    return this.http.get<any>(`https://api.exrates.me/openapi/v1/public/currency_pairs`)
      .pipe(map(res => res.data));
    // return of(data);
  }

  public getOrders(pair): any {
    return this.stompService.watch(`/app/orders/sfwfrf442fewdf/detailed/${pair}`)
      .pipe(map((message: Message) => JSON.parse(message.body)));
  }

}
