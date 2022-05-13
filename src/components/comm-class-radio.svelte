<script lang="ts">
    import {currentRep} from '../stores/rep-store';
    import { SAT_instance, IIT_instance, All_mfr_instance} from '../stores/manufacturers-store';
    import type { All_pcts, IIT_pcts, SAT_pcts } from 'comedical-types';

    export let assignedTeam: SAT_pcts | IIT_pcts | All_pcts = $currentRep.dir_pcts; //REMOVE $ SO IT'S NOT REACTIVE? ONLY INITIALIZED??
    // The instance of sales team class which is selected will be written to the currentRep's dir_pcts property
</script>

<section>
    <strong>Commission Class/Sales Team:</strong>
    <!--group the radio buttons together so only one can be selected-->
    <input name="iit-team-assign" type="radio"><label for="iit-team-assign">Interventional Team (IIT)</label>
    <input name="sat-team-assign" type="radio"><label for="sat-team-assign">Surgery & Anesthesia Team (SAT)</label>
    <input name="both-team-assign" type="radio"><label for="both-team-assign">Both Teams</label>

</section>