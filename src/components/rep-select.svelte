<script lang='ts'>
    import { currentRep, SalesRep } from '../stores/rep-store';

</script>

<main>
    <strong>Currently Editing:</strong><p>{$currentRep.rep_name}</p>
    <label for="sales-rep">Sales Rep.&nbsp;</label>
    <select class="select-box" name="sales-rep" id="rep-select">
        <option value="chris-burbiglia">Chris Burbiglia</option>
        <option value="erin-collins">Erin Collins</option>
        <option value="michael-coyne">Michael Coyne</option>                       
        <option value="molly-dennehey">Molly Dennehey</option>
        <option value="marti-dowdy">Marti Dowdy</option>
        <option value="nick-hagarty">Nick Hagarty</option>
        <option value="ryan-murray">Ryan Murray</option>
        <option value="griff-overturf">Griff Overturf</option>
        <option value="haydon-overturf">Haydon Overturf</option>
        <option value="mike-parker">Mike Parker</option>
        <option value="house-account" selected>House Account</option> <!--default value-->
    </select>
</main>