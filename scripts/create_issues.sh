actions='confirmation_height_currently_processing confirmation_history confirmation_info confirmation_quorum database_txn_tracker delegators delegators_count deterministic_key epoch_upgrade frontier_count frontiers keepalive key_create key_expand ledger node_id node_id_delete peers process receivable receivable_exists representatives representatives_online republish sign stats stats_clear stop successors telemetry validate_account_number version unchecked unchecked_clear unchecked_get unchecked_keys unopened uptime work_cancel work_generate work_peer_add work_peers work_peers_clear work_validate account_create account_list account_move account_remove account_representative_set accounts_create block_create (optional wallet) password_change password_enter password_valid receive receive_minimum receive_minimum_set search_pending search_pending_all send wallet_add wallet_add_watch wallet_balances wallet_change_seed wallet_contains wallet_create wallet_destroy wallet_export wallet_frontiers wallet_history wallet_info wallet_ledger wallet_lock wallet_locked wallet_pending wallet_representative wallet_representative_set wallet_republish wallet_work_get work_get work_set'
for action in $actions
do
    title="RPC command: \`"$action"\`"
    # echo "$title"
    gh issue create -t "$title" -a "@me" -m "🥳🥳 All RPC commands supported! 🥳🥳" -l "RPC command" -b ""
    sleep 5
done