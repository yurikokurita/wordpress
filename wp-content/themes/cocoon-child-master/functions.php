<?php //子テーマ用関数
if ( !defined( 'ABSPATH' ) ) exit;

//子テーマ用のビジュアルエディタースタイルを適用
add_editor_style();

//以下に子テーマ用の関数を書く
// ▼コメント欄の文言削除
add_filter( 'comment_form_logged_in', '__return_empty_string' );

// ▼ハイパーリンク設定（DW Question & Answerを入れたため独自設定必要）
add_filter('wp_unique_post_slug', 'change_post_slug', 10, 4);
function change_post_slug($slug, $post_ID, $post_status, $post_type){
  $postTypeArr = array(
      'dwqa-question'
  );
  if(in_array($post_type, $postTypeArr)){
    $slug = $post_ID;
  }
  return $slug;
}