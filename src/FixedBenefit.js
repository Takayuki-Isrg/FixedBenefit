$(function()) {

    var name_box            = $('id#name');
    var furigana_box        = $('id#furigana');
    var zipcode_box        = $('id#zipcode');

    var gender_checked_num = $('input[name="gender"];checked');

    // エラー数のカウント用変数
    var error_count = 0;

    if ( gender_checked_num.value == "" ) {
        error_count++;
        alert("性別を選択してください");
    } else {
        
    }
    
    import $ from 'jquery';
    const zenginCode = require('zengin-code');
    
    $(function() {
        
        // 銀行コードの入力イベント
        $("input[name='bank_code']").on('input', function() {
        $("input[name='bank_name']").val('');
        const bankCode = $(this).val();
    
        if (zenginCode[bankCode] !== undefined) {
            // 銀行データがあれば銀行名をセットする
            $("input[name='bank_name']").val(zenginCode[bankCode]['name']);
            $("input[name='branch_code']").val('');
            $("input[name='branch_name']").val('');
        }
    });
    
        // 支店コードの入力イベント
        $("input[name='branch_code']").on('input', function() {
            $("input[name='branch_name']").val('');
            const bankCode = $("input[name='bank_code']").val();
            const branchCode = $(this).val();
    
        if (zenginCode[bankCode] !== undefined && zenginCode[bankCode]['branches'][branchCode] !== undefined) {
            // 支店データがあれば支店名をセットする
            $("input[name='branch_name']").val(zenginCode[bankCode]['branches'][branchCode]['name']);
            }
        });
    })

}

// function enqueue_ajaxzip3() {
//     wp_enqueue_script( 'ajaxzip3', 'https://ajaxzip3.github.io/ajaxzip3.js', array( 'jquery' ), '', true );
// }
// add_action( 'wp_enqueue_scripts', 'enqueue_ajaxzip3' );

